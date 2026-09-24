<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons/disciplines'
import { shortCost, shortDuration } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'
import { useCharacters } from '../composables/useCharacters'
import { useRouteCharacter } from '../composables/useRouteCharacter'
import PageNav from '../components/PageNav.vue'

const router = useRouter()
const { t } = useI18n()
const { disciplines, disciplineById } = useData()
const { togglePower, hasPower } = useCharacters()
const { charId, character } = useRouteCharacter()

/** null = choosing a Discipline; otherwise the Discipline whose powers are listed. */
const picked = ref<string | null>(null)
const discipline = computed(() => (picked.value ? disciplineById(picked.value) : undefined))

/** How many of a Discipline's powers this character already has. */
function ownedCount(discId: string): number {
  const disc = disciplineById(discId)
  if (!disc) return 0
  return disc.powers.reduce((n, p) => n + (hasPower(charId.value, discId, p.id) ? 1 : 0), 0)
}

function isOwned(powerId: string): boolean {
  return !!discipline.value && hasPower(charId.value, discipline.value.id, powerId)
}

function toggle(powerId: string): void {
  if (!discipline.value) return
  togglePower(charId.value, discipline.value.id, powerId)
}

function goBack(): void {
  if (picked.value) picked.value = null
  else router.push(`/character/${charId.value}`)
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="character">

    <PageNav :back-label="picked ? t.characters.addTitle : character.name"
             :current="discipline ? discipline.name : t.characters.addTitle"
             truncate @back="goBack" />

    <main class="char-form-wrap mx-auto px-3 px-sm-4 py-4 pb-5">

      <!-- ── Step 1 — which Discipline ── -->
      <template v-if="!discipline">
        <h1 class="char-form-label font-title mb-3">{{ t.characters.addPickDiscipline }}</h1>

        <div class="d-flex flex-column gap-2">
          <button
            v-for="d in disciplines"
            :key="d.id"
            type="button"
            class="disc-mini-card"
            :style="{ '--card-color': d.color, '--card-glow': d.colorGlow }"
            @click="picked = d.id"
          >
            <span class="disc-mini-art" aria-hidden="true">
              <span class="disc-mini-icon sigil" v-html="DISCIPLINE_ICONS[d.iconType]"></span>
            </span>
            <span class="flex-fill">
              <span class="d-block font-title fw-bold text-white">{{ d.name }}</span>
              <span class="d-block text-parchment-dim" style="font-size:.82rem;">
                {{ [d.tipo, `${d.powers.length} ${t.disciplinesList.powers}`].filter(Boolean).join(' · ') }}
              </span>
            </span>
            <span v-if="ownedCount(d.id)" class="disc-owned-badge">{{ ownedCount(d.id) }}</span>
            <svg class="disc-pick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </template>

      <!-- ── Step 2 — which powers ── -->
      <template v-else>
        <h1 class="char-form-label font-title mb-1">{{ discipline.name }}</h1>
        <p class="text-parchment-dim small mb-3">{{ t.characters.addPickPowers }}</p>

        <div class="d-flex flex-column gap-2">
          <button
            v-for="p in discipline.powers"
            :key="p.id"
            type="button"
            class="power-pick"
            :class="{ owned: isOwned(p.id) }"
            :aria-pressed="isOwned(p.id)"
            :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }"
            @click="toggle(p.id)"
          >
            <!-- A box that fills with a tick, so the state reads by shape as well as
                 colour rather than by colour alone. -->
            <span class="power-pick-box" aria-hidden="true">
              <svg v-if="isOwned(p.id)" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="m5 13 4.5 4.5L19 7"/>
              </svg>
            </span>

            <span class="flex-fill text-start">
              <span class="d-block font-title fw-bold text-white power-pick-name">{{ p.name }}</span>
              <span class="d-block text-parchment-dim" style="font-size:.8rem;">
                {{ [shortCost(p.cost), shortDuration(p.duration)].filter(Boolean).join(' · ') }}
              </span>
            </span>

            <span class="power-level-badge power-level-badge--row">{{ t.discipline.level }} {{ p.level }}</span>
          </button>
        </div>

        <div class="char-form-actions">
          <button class="settings-option char-form-primary" type="button"
                  @click="router.push(`/character/${charId}`)">
            {{ t.characters.addDone }}
          </button>
        </div>
      </template>

    </main>
  </div>

  <!-- ── Not found ── -->
  <div v-else class="min-vh-100 bg-void font-body text-parchment d-flex flex-column
                     align-items-center justify-content-center gap-3 p-5 text-center">
    <p class="text-parchment-dim mb-0">{{ t.characters.notFound }}</p>
    <button class="settings-option" @click="router.push('/')">{{ t.characters.backHome }}</button>
  </div>
</template>
