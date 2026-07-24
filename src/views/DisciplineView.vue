<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons'
import { levelDots, shortCost, shortDuration, artGradient } from '../helpers'
import { useFavorites } from '../composables/useFavorites'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { disciplineById } = useData()

const discipline = computed(() => disciplineById(route.params['id'] as string))
const { isFavorite, toggle } = useFavorites()

function goBack():            void { router.push('/disciplines') }
function goPower(pid: string): void { router.push(`/discipline/${route.params['id']}/power/${pid}`) }
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="discipline">

    <!-- ── Nav ── -->
    <nav class="d-flex align-items-center flex-wrap gap-2 px-3 px-sm-4 py-3 border-bottom border-void-border"
         style="font-size:.9rem;">
      <button class="back-btn" @click="goBack">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        {{ t.discipline.back }}
      </button>
      <span class="text-parchment-faint">›</span>
      <span class="text-parchment">{{ discipline.name }}</span>
    </nav>

    <!-- ── Discipline header ── -->
    <header class="d-flex flex-column flex-sm-row gap-3 gap-sm-4 align-items-center align-items-sm-start
                   px-4 px-sm-5 py-4 py-sm-5 border-bottom border-void-border max-content mx-auto"
            :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }">

      <!-- Icon -->
      <div class="discipline-page-icon flex-shrink-0"
           :style="{ background: artGradient(discipline) }"
           aria-hidden="true">
        <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
             :style="{ color: discipline.color }"
             class="disc-icon-inner"></div>
      </div>

      <!-- Info -->
      <div class="text-center text-sm-start w-100">
        <h1 class="font-title fw-bold tracking-wide text-white mb-2"
            style="font-size: clamp(1.5rem,4vw,2.4rem);"
            :style="{ textShadow: '0 0 20px ' + discipline.colorGlow }">
          {{ discipline.name }}
        </h1>
        <p class="text-parchment-dim fst-italic mb-4 leading-relaxed" style="max-width:42rem; font-size:1.05rem;">
          {{ discipline.description }}
        </p>

        <!-- Stats row -->
        <div class="d-flex flex-wrap justify-content-center justify-content-sm-start gap-4">
          <div v-if="discipline.tipo" class="d-flex flex-column gap-1">
            <span class="text-gold text-uppercase tracking-widest small fw-semibold">{{ t.discipline.type }}</span>
            <span class="text-parchment">{{ discipline.tipo }}</span>
          </div>
          <div v-if="discipline.amenaza" class="d-flex flex-column gap-1">
            <span class="text-gold text-uppercase tracking-widest small fw-semibold">{{ t.discipline.threat }}</span>
            <span class="text-parchment">{{ discipline.amenaza }}</span>
          </div>
          <div v-if="discipline.resonancia" class="d-flex flex-column gap-1">
            <span class="text-gold text-uppercase tracking-widest small fw-semibold">{{ t.discipline.resonance }}</span>
            <span class="text-parchment">{{ discipline.resonancia }}</span>
          </div>
          <div v-if="discipline.clanes.length" class="d-flex flex-column gap-1">
            <span class="text-gold text-uppercase tracking-widest small fw-semibold">{{ t.discipline.clans }}</span>
            <span class="text-parchment">{{ discipline.clanes.join(', ') }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- ── Powers grid ── -->
    <section class="px-3 px-sm-4 py-4 pb-5 max-content mx-auto">
      <p class="text-parchment-dim text-uppercase tracking-widest small fw-semibold mb-3">
        {{ t.discipline.powers }} · {{ discipline.powers.length }} {{ t.discipline.available }}
      </p>

      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-sm-3">

        <div class="col" v-for="power in discipline.powers" :key="power.id">
          <article
            class="power-card d-flex flex-column h-100"
            :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }"
            @click="goPower(power.id)"
            @keydown.enter.prevent="goPower(power.id)"
            @keydown.space.prevent="goPower(power.id)"
            tabindex="0"
            role="button"
            :aria-label="`${power.name}, ${t.discipline.level} ${power.level}${power.cost && power.cost !== 'Ninguno' ? ', ' + t.discipline.cost + ': ' + power.cost : ''}`"
          >
            <!-- Card art -->
            <div class="power-card-art"
                 :style="{ background: artGradient(discipline) }" aria-hidden="true">
              <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
                   :style="{ color: discipline.color }"
                   class="power-art-icon"></div>

              <div class="power-level-badge">{{ t.discipline.level }} {{ power.level }}</div>

              <div class="power-level-dots-card">
                <span v-for="(filled, i) in levelDots(power.level)" :key="i"
                      class="power-dot" :class="{ filled }"></span>
              </div>

              <div class="art-overlay" :style="{ background: 'linear-gradient(180deg, transparent 30%, var(--void-card) 100%)' }"></div>
              <button class="star-btn"
                      :class="{ 'star-btn--filled': isFavorite(discipline.id, power.id) }"
                      @click.stop="toggle(discipline.id, power.id)"
                      :title="isFavorite(discipline.id, power.id) ? t.discipline.removeFromFav : t.discipline.addToFav"
                      :aria-label="isFavorite(discipline.id, power.id) ? t.discipline.removeFromFav : t.discipline.addToFav">★</button>
            </div>

            <!-- Card body -->
            <div class="d-flex flex-column gap-1 p-2 p-sm-3 flex-fill">
              <h3 class="font-title fw-bold text-white leading-tight mb-0"
                  style="font-size:0.88rem;">
                {{ power.name }}
              </h3>
              <p class="small text-parchment-dim mb-0">
                <strong class="text-gold">{{ t.discipline.cost }}:</strong> {{ shortCost(power.cost) }}
              </p>
              <p class="small text-parchment-dim mb-0" v-if="shortDuration(power.duration)">
                <strong class="text-gold">{{ t.discipline.duration }}:</strong> {{ shortDuration(power.duration) }}
              </p>
              <p class="small text-parchment-dim fst-italic leading-snug mt-auto mb-0 d-none d-sm-block line-clamp-3">
                {{ power.description }}
              </p>
            </div>
          </article>
        </div>

      </div>
    </section>
  </div>

  <!-- Not found -->
  <div v-else class="min-vh-100 bg-void text-parchment-dim d-flex flex-column align-items-center justify-content-center gap-3 p-5">
    <div class="fs-1" style="opacity:.4;">⚰️</div>
    <p>{{ t.discipline.notFound }}</p>
    <button class="back-btn" @click="$router.push('/')">{{ t.discipline.backHome }}</button>
  </div>
</template>
