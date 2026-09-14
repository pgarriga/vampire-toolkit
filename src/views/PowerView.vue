<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons'
import { powerById, levelDots, artGradient, parseAmalgama, shortDuration } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'
import { useFavorites } from '../composables/useFavorites'
import { useMyPowers } from '../composables/useMyPowers'
import { renderPowerCard } from '../renderPowerCard'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { disciplineById, disciplines } = useData()
const { isFavorite, toggle } = useFavorites()
const { flatPowers } = useMyPowers()

const discipline = computed(() => disciplineById(route.params['id'] as string))
const power      = computed(() => powerById(discipline.value, route.params['powerId'] as string))

const canShare   = ref(false)
const isSharing  = ref(false)

onMounted(() => {
  if (typeof navigator.share !== 'function') return
  const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean }
  if (typeof nav.canShare === 'function') {
    try {
      const probe = new File(
        [new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])],
        'p.png',
        { type: 'image/png' },
      )
      canShare.value = nav.canShare({ files: [probe] })
      return
    } catch { /* fall through */ }
  }
  canShare.value = true
})

async function sharePower() {
  if (!discipline.value || !power.value || isSharing.value) return
  isSharing.value = true
  try {
    const blob = await renderPowerCard(discipline.value, power.value, {
      cost:     t.value.power.cost,
      dicePool: t.value.power.dicePool,
      duration: t.value.power.duration,
      type:     t.value.power.type,
      amalgam:  t.value.power.amalgam,
    })
    const file = new File([blob], `${power.value.id}.png`, { type: 'image/png' })
    await navigator.share({
      files: [file],
      title: power.value.name,
      text:  `${power.value.name} — ${discipline.value.name} · ${t.value.power.level} ${power.value.level}`,
    })
  } catch (err) {
    if ((err as DOMException)?.name === 'AbortError') return
    console.error('Share failed', err)
    alert(t.value.power.shareError)
  } finally {
    isSharing.value = false
  }
}

const amalgamaSegments = computed(() => {
  const text = power.value?.amalgama
  if (!text) return []
  return parseAmalgama(text, disciplines.value)
})

function goBack(): void {
  if (fromMyPowers.value) router.push('/my-powers')
  else router.push(`/discipline/${route.params['id']}`)
}

// ── Swipe / arrow navigation between sibling powers ──────────────────────────

const fromMyPowers = computed(() => route.query['from'] === 'my-powers')

/**
 * The powers this view can step through, in the order of the list the reader came
 * from: the discipline's own order, or the flattened My Powers list.
 */
const siblings = computed<Array<{ disciplineId: string; powerId: string }>>(() => {
  const disc = discipline.value
  const own = disc ? disc.powers.map(p => ({ disciplineId: disc.id, powerId: p.id })) : []
  if (!fromMyPowers.value) return own
  const saved = flatPowers.value.map(e => ({ disciplineId: e.disciplineId, powerId: e.power.id }))
  // Un-starring the power you are reading drops it out of the saved list; fall back
  // to the discipline so the gesture keeps working instead of going dead.
  const stillSaved = saved.some(
    s => s.disciplineId === route.params['id'] && s.powerId === route.params['powerId'],
  )
  return stillSaved ? saved : own
})

const currentIndex = computed(() =>
  siblings.value.findIndex(
    s => s.disciplineId === route.params['id'] && s.powerId === route.params['powerId'],
  ),
)

/** `step` is +1 for the next power, -1 for the previous one. Stops at both ends. */
function goSibling(step: number): void {
  const i = currentIndex.value
  if (i === -1) return
  const target = siblings.value[i + step]
  if (!target) return
  const query = fromMyPowers.value ? '?from=my-powers' : ''
  router.push(`/discipline/${target.disciplineId}/power/${target.powerId}${query}`)
}

/** Travel before a drag counts as a swipe, and how much it must beat the vertical
 *  component by — without the slope test a diagonal flick while scrolling navigates. */
const SWIPE_MIN_PX = 60
const SWIPE_SLOPE  = 1.4

let swipeX = 0
let swipeY = 0
let swiping = false

function onTouchStart(e: TouchEvent): void {
  const touch = e.touches.length === 1 ? e.touches[0] : undefined
  if (!touch) { swiping = false; return }
  swipeX = touch.clientX
  swipeY = touch.clientY
  swiping = true
}

function onTouchEnd(e: TouchEvent): void {
  if (!swiping) return
  swiping = false
  const touch = e.changedTouches[0]
  if (!touch) return
  const dx = touch.clientX - swipeX
  const dy = touch.clientY - swipeY
  if (Math.abs(dx) < SWIPE_MIN_PX) return
  if (Math.abs(dx) < Math.abs(dy) * SWIPE_SLOPE) return
  // Carousel convention: dragging left pulls the next power in, dragging right
  // pushes back to the previous one. The arrow keys keep the opposite mapping,
  // which is the one a keyboard expects (ArrowRight = forward).
  goSibling(dx > 0 ? -1 : 1)
}

/** Same navigation from a keyboard, so the gesture is not the only way in. */
function onKeydown(e: KeyboardEvent): void {
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
  if (e.key === 'ArrowRight')     goSibling(1)
  else if (e.key === 'ArrowLeft') goSibling(-1)
  else return
  e.preventDefault()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="discipline && power"
       @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">

    <!-- ── Nav ── -->
    <nav class="d-flex align-items-center flex-wrap gap-2 px-3 px-sm-4 py-3 border-bottom border-void-border"
         style="font-size:.9rem;">
      <button class="back-btn" @click="goBack">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        {{ route.query['from'] === 'my-powers' ? t.myPowers.title : discipline.name }}
      </button>
      <span class="text-parchment-faint">›</span>
      <span class="text-parchment text-truncate">{{ power.name }}</span>
    </nav>

    <!-- ── Card ── -->
    <div class="mx-auto px-3 px-sm-4 py-4 pb-5" style="max-width: 42rem;">
      <div class="power-detail-card"
           :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow, border: '1px solid ' + discipline.color + '55' }">

        <!-- Art header -->
        <div class="power-detail-art"
             :style="{ background: artGradient(discipline) }"
             aria-hidden="true">

          <div class="power-detail-level-dots">
            <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                  class="power-dot" :class="{ filled }"
                  style="width:13px;height:13px;"></span>
          </div>

          <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
               :style="{ '--card-color': discipline.color }"
               class="power-detail-icon sigil"></div>

          <div class="power-detail-discipline-tag">
            <span>{{ discipline.name }}</span>
          </div>

          <div class="power-detail-art-overlay"></div>
        </div>

        <button v-if="canShare"
                class="share-btn share-btn--detail"
                :disabled="isSharing"
                @click="sharePower"
                :title="t.power.share"
                :aria-label="t.power.share">
          <svg v-if="!isSharing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="18" cy="5"  r="3"/>
            <circle cx="6"  cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59"  y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51"  x2="8.59"  y2="10.49"/>
          </svg>
          <span v-else class="share-btn-spinner" aria-hidden="true"></span>
        </button>

        <button class="star-btn star-btn--detail"
                :class="{ 'star-btn--filled': isFavorite(discipline.id, power.id) }"
                :aria-pressed="isFavorite(discipline.id, power.id)"
                @click="toggle(discipline.id, power.id)"
                :title="isFavorite(discipline.id, power.id) ? t.discipline.removeFromFav : t.discipline.addToFav"
                :aria-label="isFavorite(discipline.id, power.id) ? t.discipline.removeFromFav : t.discipline.addToFav">
          <svg viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor" stroke-width="2" stroke-linejoin="round" :fill="isFavorite(discipline.id, power.id) ? 'currentColor' : 'none'"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
        </button>

        <!-- Content -->
        <div class="px-3 px-sm-4 px-md-5 py-4 py-sm-5">

          <h1 class="font-title fw-bold text-white text-center tracking-wide mb-4"
              style="font-size: clamp(1.3rem,4vw,2rem);"
              :style="{ textShadow: '0 0 20px ' + discipline.colorGlow }">
            {{ power.name }}
            <span class="visually-hidden">— {{ t.power.level }} {{ power.level }}</span>
          </h1>

          <!-- Stats table -->
          <div class="pst">
            <div v-if="power.cost" class="pst-row">
              <div class="pst-key">{{ t.power.cost }}</div>
              <div class="pst-val">{{ power.cost }}</div>
            </div>
            <div v-if="power.dicePool && power.dicePool !== 'N/A'" class="pst-row">
              <div class="pst-key">{{ t.power.dicePool }}</div>
              <div class="pst-val">{{ power.dicePool }}</div>
            </div>
            <div v-if="shortDuration(power.duration)" class="pst-row">
              <div class="pst-key">{{ t.power.duration }}</div>
              <div class="pst-val">{{ power.duration }}</div>
            </div>
            <div v-if="discipline.tipo" class="pst-row">
              <div class="pst-key">{{ t.power.type }}</div>
              <div class="pst-val">{{ discipline.tipo }}</div>
            </div>
          </div>

          <!-- Ornament divider -->
          <div class="ornament-divider my-4">✦ ✦ ✦</div>

          <!-- Description -->
          <p class="text-parchment leading-relaxed mb-0" style="font-size:1.1rem; font-weight:300;"
             v-if="power.description">
            {{ power.description }}
          </p>

          <!-- Amalgama note with links -->
          <div class="amalgama-note mt-4" v-if="power.amalgama">
            <strong>{{ t.power.amalgam }}:</strong>
            <template v-for="(seg, i) in amalgamaSegments" :key="i">
              <router-link
                v-if="seg.disciplineId"
                :to="`/discipline/${seg.disciplineId}`"
                class="amalgama-link"
              >{{ seg.text }}</router-link>
              <span v-else>{{ seg.text }}</span>
            </template>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="min-vh-100 bg-void text-parchment-dim d-flex flex-column align-items-center justify-content-center gap-3 p-5">
    <div class="fs-1" style="opacity:.4;">⚰️</div>
    <p>{{ t.power.notFound }}</p>
    <button class="back-btn" @click="$router.push('/')">{{ t.power.backHome }}</button>
  </div>
</template>
