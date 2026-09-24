<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { TRAIT_ICONS } from '../icons/traits'
import { foldForSearch } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useTraits, TRAIT_CATEGORIES } from '../composables/useTraits'
import type { Trait, TraitKind } from '../types'
import PageHeader from '../components/PageHeader.vue'
import SearchInput from '../components/SearchInput.vue'

const search = ref('')
const router = useRouter()
const { t } = useI18n()
const { traits: allTraits, traitById } = useTraits()

/**
 * Everything a reader might type: the name, the wordings the same trait is printed
 * under elsewhere, the blurb, the Specialties, and — for a Skill — the Attributes it
 * rolls with, so searching "Destreza" turns up every Skill that pairs with it.
 */
function haystack(tr: Trait): string {
  return [
    tr.name,
    ...(tr.aka ?? []),
    tr.description,
    ...(tr.specialties ?? []),
    ...(tr.combos ?? []).map(c => traitById(c.attributeId)?.name ?? ''),
  ].join(' ')
}

const matches = computed<Trait[]>(() => {
  const q = foldForSearch(search.value).trim()
  if (!q) return allTraits.value
  return allTraits.value.filter(tr => foldForSearch(haystack(tr)).includes(q))
})

/** One group per column that still has a match, with the heading for this kind. */
function groups(kind: TraitKind) {
  return TRAIT_CATEGORIES
    .map(category => ({
      category,
      heading: t.value.traitsList.groups[kind][category],
      traits: matches.value.filter(tr => tr.kind === kind && tr.category === category),
    }))
    .filter(g => g.traits.length > 0)
}

const attributeGroups = computed(() => groups('attribute'))
const skillGroups     = computed(() => groups('skill'))

function goTo(id: string): void {
  router.push(`/trait/${id}`)
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <PageHeader :title="t.traitsList.title">
      <p class="position-relative text-parchment-dim fst-italic mx-auto mb-0 mt-3 traits-subtitle">
        {{ t.traitsList.subtitle }}
      </p>
    </PageHeader>

    <SearchInput v-model="search" :placeholder="t.traitsList.searchPlaceholder" :label="t.traitsList.searchAriaLabel" />

    <main v-if="attributeGroups.length || skillGroups.length"
          class="container-fluid px-3 px-sm-4 py-4 pb-5 max-content mx-auto">

      <!-- ── Attributes first, then Skills: the order the chapter is written in ── -->
      <section
        v-for="section in [
          { key: 'attribute', title: t.traitsList.attributes, groups: attributeGroups },
          { key: 'skill',     title: t.traitsList.skills,     groups: skillGroups },
        ]"
        :key="section.key"
        v-show="section.groups.length"
        class="trait-section"
        :aria-label="section.title"
      >
        <h2 class="page-title-main font-title fw-bold tracking-widest text-uppercase trait-section-title">
          {{ section.title }}
        </h2>

        <div v-for="group in section.groups" :key="group.category" class="trait-group">
          <h3 class="clan-section-title font-title tracking-widest text-uppercase">
            {{ group.heading }}
          </h3>

          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-sm-3">
            <div class="col" v-for="tr in group.traits" :key="tr.id">
              <button
                type="button"
                class="trait-card"
                :style="{ '--card-color': `var(--trait-${tr.category})` }"
                @click="goTo(tr.id)"
              >
                <span class="trait-card-art disc-mini-art" aria-hidden="true">
                  <span class="trait-card-icon sigil" v-html="TRAIT_ICONS[tr.category]"></span>
                </span>
                <span class="trait-card-body">
                  <span class="trait-card-name font-title">{{ tr.name }}</span>
                  <span class="trait-card-desc">{{ tr.description }}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Empty state -->
    <div v-else class="text-center py-5 px-4 text-parchment-dim">
      <div class="fs-1 mb-3" style="opacity:.4;">🩸</div>
      <p>{{ t.traitsList.noResults }} «{{ search }}»</p>
    </div>

  </div>
</template>
