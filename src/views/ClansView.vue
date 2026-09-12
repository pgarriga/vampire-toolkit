<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { CLAN_ICONS } from '../clan-icons'
import { colorGradient } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useClans } from '../composables/useClans'
import { useData } from '../composables/useData'
import type { Clan } from '../types'

const search = ref('')
const router = useRouter()
const { t } = useI18n()
const { clans: allClans } = useClans()
const { disciplineById } = useData()

// Strips diacritics so "hecata" matches "Hécata" and "prohibicion" matches "Prohibición"
function norm(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/** Localized Discipline names for a clan — Oblivion has no page, so it falls back to a label. */
function disciplineNames(clan: Clan): string[] {
  return clan.disciplines.map(id => disciplineById(id)?.name ?? t.value.clan.oblivion)
}

const clans = computed<Clan[]>(() => {
  const q = norm(search.value).trim()
  if (!q) return allClans.value
  return allClans.value.filter(c =>
    norm(c.name).includes(q) ||
    norm(c.nickname).includes(q) ||
    norm(c.bane.name).includes(q) ||
    disciplineNames(c).some(n => norm(n).includes(q))
  )
})

function goTo(id: string) {
  router.push(`/clan/${id}`)
}

function clanGradient(c: Clan): string {
  return colorGradient(c.color, c.colorDark)
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <!-- ── Header ── -->
    <header class="page-header text-center px-4 pt-5 pb-4 position-relative overflow-hidden">
      <div class="position-absolute top-0 start-0 w-100 h-100 pe-none"
           style="background: radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,0,0,0.15) 0%, transparent 70%);"></div>

      <h1 class="font-title fw-black tracking-widest text-uppercase lh-sm position-relative page-title-main"
          style="font-size: clamp(1.8rem,5vw,3.2rem);">
        {{ t.clansList.title }}
      </h1>
    </header>

    <!-- ── Search ── -->
    <div class="mx-auto px-4 pt-4 pb-1" style="max-width: 28rem;">
      <input
        v-model="search"
        class="search-input"
        type="text"
        :placeholder="t.clansList.searchPlaceholder"
        autocomplete="off"
        :aria-label="t.clansList.searchAriaLabel"
      />
    </div>

    <!-- ── Clans grid ── -->
    <main v-if="clans.length"
          class="container-fluid px-3 px-sm-4 py-4 pb-5 max-content mx-auto">
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-sm-3">

        <div class="col" v-for="c in clans" :key="c.id">
          <article
            class="discipline-card d-flex flex-column h-100"
            :style="{ '--card-color': c.color, '--card-glow': c.colorGlow }"
            @click="goTo(c.id)"
            @keydown.enter.prevent="goTo(c.id)"
            @keydown.space.prevent="goTo(c.id)"
            tabindex="0"
            role="button"
            :aria-label="`${c.name} — ${c.nickname}`"
          >
            <!-- Sigil -->
            <div class="discipline-card-art"
                 :style="{ background: clanGradient(c) }" aria-hidden="true">
              <div v-html="CLAN_ICONS[c.id]" class="art-icon sigil"></div>
              <div class="art-overlay"></div>
            </div>

            <!-- Body -->
            <div class="d-flex flex-column gap-1 p-2 p-sm-3 flex-fill">
              <h2 class="font-title fw-bold tracking-wide text-white leading-tight mb-0"
                  style="font-size: 0.92rem;">
                {{ c.name }}
              </h2>

              <div class="d-flex flex-wrap gap-1 mt-1">
                <span class="badge-tipo">{{ c.nickname }}</span>
                <span class="badge-clanes d-none d-sm-inline-block">
                  {{ disciplineNames(c).join(' · ') }}
                </span>
              </div>

              <p class="text-parchment-dim fst-italic leading-snug mt-1 mb-0 d-none d-sm-block"
                 style="font-size:0.85rem;">
                <strong class="text-gold not-italic">{{ t.clansList.bane }}:</strong>
                {{ c.bane.name }}
              </p>

              <div class="mt-auto pt-1 small clan-card-verbs">
                {{ c.verbs.slice(0, 3).join(' · ') }}
              </div>
            </div>
          </article>
        </div>

      </div>
    </main>

    <!-- ── Empty state ── -->
    <main v-else class="text-center px-4 py-5">
      <p class="text-parchment-dim fst-italic mb-0">
        {{ t.clansList.noResults }} “{{ search }}”.
      </p>
    </main>

  </div>
</template>
