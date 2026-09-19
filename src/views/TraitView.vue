<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TRAIT_ICONS } from '../trait-icons'
import { levelDots } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useTraits } from '../composables/useTraits'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { traitById, skillsUsing } = useTraits()

const trait = computed(() => traitById(route.params['id'] as string))

/** "Habilidad Física" / "Atributo Mental" — written out per language, since Spanish
 *  and Catalan inflect the adjective for the noun's gender. */
const kindLabel = computed(() =>
  trait.value ? t.value.traitsList.kinds[trait.value.kind][trait.value.category] : '',
)

const accent = computed(() => trait.value ? `var(--trait-${trait.value.category})` : 'var(--gold)')

/** The book's five readings of the score, paired with their dot count. */
const levels = computed(() =>
  (trait.value?.dots ?? []).map((text, i) => ({ level: i + 1, text, dots: levelDots(i + 1) })),
)

/**
 * A Skill lists the Attributes it rolls with; an Attribute lists the Skills that roll
 * off it. Both come from the same `combos` on the Skills, so the two pages can never
 * disagree about a roll — one is just the other read backwards.
 */
const rolls = computed(() => {
  const tr = trait.value
  if (!tr) return []
  if (tr.kind === 'skill') {
    return (tr.combos ?? []).flatMap(c => {
      const attr = traitById(c.attributeId)
      return attr ? [{ id: attr.id, pool: `${attr.name} + ${tr.name}`, example: c.example }] : []
    })
  }
  return skillsUsing(tr.id).map(({ skill, example }) => ({
    id: skill.id,
    pool: `${tr.name} + ${skill.name}`,
    example,
  }))
})

const rollsTitle = computed(() =>
  trait.value?.kind === 'skill' ? t.value.trait.combos : t.value.trait.combosAttr,
)

function goBack():         void { router.push('/traits') }
function goTrait(id: string): void { router.push(`/trait/${id}`) }
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="trait">

    <!-- ── Nav ── -->
    <nav class="d-flex align-items-center flex-wrap gap-2 px-3 px-sm-4 py-3 border-bottom border-void-border"
         style="font-size:.9rem;">
      <button class="back-btn" @click="goBack">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        {{ t.trait.back }}
      </button>
      <span class="text-parchment-faint">›</span>
      <span class="text-parchment">{{ trait.name }}</span>
    </nav>

    <!-- ── Header ── -->
    <header class="d-flex flex-column flex-sm-row gap-3 gap-sm-4 align-items-center align-items-sm-start
                   px-4 px-sm-5 py-4 py-sm-5 border-bottom border-void-border max-content mx-auto"
            :style="{ '--card-color': accent }">

      <div class="discipline-page-icon clan-medallion flex-shrink-0" aria-hidden="true">
        <div v-html="TRAIT_ICONS[trait.category]" class="disc-icon-inner sigil"></div>
      </div>

      <div class="text-center text-sm-start w-100">
        <h1 class="font-title fw-bold tracking-wide text-white mb-1"
            style="font-size: clamp(1.5rem,4vw,2.4rem);">
          {{ trait.name }}
        </h1>
        <p class="clan-nickname font-title tracking-widest text-uppercase mb-3">
          {{ kindLabel }}
        </p>

        <p class="text-parchment-dim fst-italic mb-0 leading-relaxed"
           style="max-width:42rem; font-size:1.05rem;">
          {{ trait.description }}
        </p>

        <!-- What the score feeds outside its own rolls: Health, Willpower, a free
             Specialty. Only a handful of traits have one. -->
        <p v-if="trait.note" class="trait-note mb-0 mt-3">{{ trait.note }}</p>
      </div>
    </header>

    <!-- ── Body ── -->
    <main class="max-content mx-auto px-3 px-sm-4 py-4 pb-5" :style="{ '--card-color': accent }">

      <!-- Dot levels -->
      <section class="clan-section">
        <h2 class="clan-section-title font-title tracking-widest text-uppercase">
          {{ t.trait.levels }}
        </h2>
        <ul class="trait-levels list-unstyled mb-0">
          <li v-for="l in levels" :key="l.level" class="trait-level">
            <span class="disc-rating trait-level-dots" aria-hidden="true">
              <span v-for="(on, i) in l.dots" :key="i" class="power-dot" :class="{ filled: on }"></span>
            </span>
            <span class="visually-hidden">{{ t.trait.level }} {{ l.level }}:</span>
            <span class="trait-level-text">{{ l.text }}</span>
          </li>
        </ul>
      </section>

      <!-- Specialties -->
      <section class="clan-section" v-if="trait.specialties?.length">
        <h2 class="clan-section-title font-title tracking-widest text-uppercase">
          {{ t.trait.specialties }}
        </h2>
        <ul class="clan-verbs list-unstyled d-flex flex-wrap gap-2 mb-0">
          <li v-for="sp in trait.specialties" :key="sp" class="clan-verb">{{ sp }}</li>
        </ul>
      </section>

      <!-- Attribute + Skill rolls, read forwards on a Skill and backwards on an Attribute -->
      <section class="clan-section" v-if="rolls.length">
        <h2 class="clan-section-title font-title tracking-widest text-uppercase">
          {{ rollsTitle }}
        </h2>
        <div class="row row-cols-1 row-cols-lg-2 g-2 g-sm-3">
          <div class="col" v-for="r in rolls" :key="r.id">
            <button type="button" class="trait-roll" @click="goTrait(r.id)">
              <span class="trait-roll-pool font-title">{{ r.pool }}</span>
              <span class="trait-roll-example">{{ r.example }}</span>
            </button>
          </div>
        </div>
      </section>

    </main>
  </div>

  <!-- ── Not found ── -->
  <div v-else class="min-vh-100 bg-void font-body text-parchment d-flex flex-column
                     align-items-center justify-content-center text-center px-4 gap-3">
    <p class="text-parchment-dim fst-italic mb-0">{{ t.trait.notFound }}</p>
    <button class="back-btn" @click="router.push('/')">{{ t.trait.backHome }}</button>
  </div>
</template>
