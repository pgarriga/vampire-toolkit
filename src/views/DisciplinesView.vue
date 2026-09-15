<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons'
import { artGradient } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'
import { useClans } from '../composables/useClans'
import type { Discipline } from '../types'

const search = ref('')
const router  = useRouter()
const { t } = useI18n()
const { disciplines: allDisciplines } = useData()
const { clanSigil } = useClans()

/** In-clan Disciplines are shown as sigils — the names are long (six of them on
 *  Dominate) and the marks are already traced. Anything with no mark at all would
 *  fall back to a text chip; nothing in the data does today. */
function clanSigils(d: Discipline) {
  return d.clanes.flatMap(name => {
    const sigil = clanSigil(name)
    return sigil ? [{ name, svg: sigil.svg }] : []
  })
}
function clanPlain(d: Discipline): string[] {
  return d.clanes.filter(name => !clanSigil(name))
}

// Strips diacritics so "hecata" matches "Hécata" and "dominacion" matches "Dominación"
function norm(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const disciplines = computed<Discipline[]>(() => {
  const q = norm(search.value).trim()
  if (!q) return allDisciplines.value
  return allDisciplines.value.filter(d =>
    norm(d.name).includes(q) ||
    d.clanes.some(c => norm(c).includes(q)) ||
    norm(d.tipo).includes(q)
  )
})

function goTo(id: string) {
  router.push(`/discipline/${id}`)
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
        {{ t.disciplinesList.title }}
      </h1>
    </header>

    <!-- ── Search ── -->
    <div class="mx-auto px-4 pt-4 pb-1" style="max-width: 28rem;">
      <input
        v-model="search"
        class="search-input"
        type="text"
        :placeholder="t.disciplinesList.searchPlaceholder"
        autocomplete="off"
        :aria-label="t.disciplinesList.searchAriaLabel"
      />
    </div>

    <!-- ── Disciplines grid ── -->
    <main v-if="disciplines.length"
          class="container-fluid px-3 px-sm-4 py-4 pb-5 max-content mx-auto">
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-sm-3">

        <div class="col" v-for="d in disciplines" :key="d.id">
          <article
            class="discipline-card d-flex flex-column h-100"
            :style="{ '--card-color': d.color, '--card-glow': d.colorGlow }"
            @click="goTo(d.id)"
            @keydown.enter.prevent="goTo(d.id)"
            @keydown.space.prevent="goTo(d.id)"
            tabindex="0"
            role="button"
            :aria-label="`${d.name}${d.tipo ? ' — ' + d.tipo : ''}, ${d.powers.length} ${t.disciplinesList.powers}${d.clanes.length ? ', ' + t.disciplinesList.clans + ': ' + d.clanes.join(', ') : ''}`"
          >
            <!-- Art -->
            <div class="discipline-card-art"
                 :style="{ background: artGradient(d) }" aria-hidden="true">
              <div v-html="DISCIPLINE_ICONS[d.iconType]"
                   :style="{ '--card-color': d.color }"
                   class="art-icon sigil"></div>
              <div class="art-overlay"></div>
            </div>

            <!-- Body -->
            <div class="d-flex flex-column gap-1 p-2 p-sm-3 flex-fill">
              <div class="disc-card-head">
                <h2 class="disc-card-title font-title fw-bold tracking-wide text-white leading-tight mb-0 min-w-0">
                  {{ d.name }}
                </h2>
                <span class="badge-tipo badge-tipo--card" v-if="d.tipo">{{ d.tipo }}</span>
              </div>

              <div class="d-flex flex-wrap gap-1 mt-1" v-if="clanPlain(d).length">
                <span class="badge-clanes d-none d-sm-inline-block" v-for="name in clanPlain(d)" :key="name">
                  {{ name }}
                </span>
              </div>

              <!-- Clan sigils. The names are already in the card's aria-label. -->
              <div class="disc-clans d-none d-sm-flex" aria-hidden="true" v-if="clanSigils(d).length">
                <span v-for="c in clanSigils(d)" :key="c.name"
                      class="disc-clan-sigil" :title="c.name" v-html="c.svg"></span>
              </div>

              <p class="disc-card-desc text-parchment-dim fst-italic leading-snug mt-1 mb-0 d-none d-sm-block">
                <strong class="text-gold not-italic">{{ t.disciplinesList.resonance }}:</strong>
                {{ d.resonancia }}
              </p>

              <div class="disc-card-meta mt-auto pt-1 text-end" style="opacity:.8;" :style="{ color: d.color }">
                {{ d.powers.length }} {{ t.disciplinesList.powers }}
              </div>
            </div>
          </article>
        </div>

      </div>
    </main>

    <!-- Empty state -->
    <div v-else class="text-center py-5 px-4 text-parchment-dim">
      <div class="fs-1 mb-3" style="opacity:.4;">🩸</div>
      <p>{{ t.disciplinesList.noResults }} «{{ search }}»</p>
    </div>

  </div>
</template>
