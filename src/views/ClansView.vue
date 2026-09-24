<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { CLAN_ICONS } from '../icons/clans'
import { colorGradient, foldForSearch } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useClans } from '../composables/useClans'
import { useData } from '../composables/useData'
import type { Clan } from '../types'
import PageHeader from '../components/PageHeader.vue'
import SearchInput from '../components/SearchInput.vue'

const search = ref('')
const router = useRouter()
const { t } = useI18n()
const { clans: allClans } = useClans()
const { disciplineById } = useData()

/** Localized Discipline names for a clan, for the search index. */
function disciplineNames(clan: Clan): string[] {
  return clan.disciplines.flatMap(id => disciplineById(id)?.name ?? [])
}

const clans = computed<Clan[]>(() => {
  const q = foldForSearch(search.value).trim()
  if (!q) return allClans.value
  return allClans.value.filter(c =>
    foldForSearch(c.name).includes(q) ||
    foldForSearch(c.nickname).includes(q) ||
    foldForSearch(c.bane.name).includes(q) ||
    disciplineNames(c).some(n => foldForSearch(n).includes(q))
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

    <PageHeader :title="t.clansList.title" />

    <SearchInput v-model="search" :placeholder="t.clansList.searchPlaceholder" :label="t.clansList.searchAriaLabel" />

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
