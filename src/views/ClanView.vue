<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { CLAN_ICONS } from '../icons/clans'
import { DISCIPLINE_ICONS } from '../icons/disciplines'
import { useI18n } from '../composables/useI18n'
import { useClans } from '../composables/useClans'
import { useData } from '../composables/useData'
import type { Discipline } from '../types'
import PageNav from '../components/PageNav.vue'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { clanById } = useClans()
const { disciplineById } = useData()

const clan = computed(() => clanById(route.params['id'] as string))

/** Each in-clan Discipline as a card: badge, name, type and power count. */
const disciplines = computed(() =>
  (clan.value?.disciplines ?? [])
    .map(id => disciplineById(id))
    .filter((d): d is Discipline => !!d)
    .map(d => ({
      id: d.id,
      name: d.name,
      iconType: d.iconType,
      color: d.color,
      colorGlow: d.colorGlow,
      meta: [d.tipo, `${d.powers.length} ${t.value.disciplinesList.powers}`].filter(Boolean).join(' · '),
    })),
)

function goBack():               void { router.push('/clans') }
function goDiscipline(id: string): void { router.push(`/discipline/${id}`) }
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="clan">

    <PageNav :back-label="t.clan.back"
             :current="clan.name" @back="goBack" />

    <!-- ── Clan header ── -->
    <header class="d-flex flex-column flex-sm-row gap-3 gap-sm-4 align-items-center align-items-sm-start
                   px-4 px-sm-5 py-4 py-sm-5 border-bottom border-void-border max-content mx-auto"
            :style="{ '--card-color': clan.color, '--card-glow': clan.colorGlow }">

      <!-- Sigil -->
      <div class="discipline-page-icon clan-medallion flex-shrink-0"
           aria-hidden="true">
        <div v-html="CLAN_ICONS[clan.id]" class="disc-icon-inner sigil"></div>
      </div>

      <!-- Info -->
      <div class="text-center text-sm-start w-100">
        <h1 class="font-title fw-bold tracking-wide text-white mb-1"
            style="font-size: clamp(1.5rem,4vw,2.4rem);"
            :style="{ textShadow: '0 0 20px ' + clan.colorGlow }">
          {{ clan.name }}
        </h1>
        <p class="clan-nickname font-title tracking-widest text-uppercase mb-3">
          {{ clan.nickname }}
        </p>

        <p class="text-parchment-dim fst-italic mb-3 leading-relaxed"
           style="max-width:42rem; font-size:1.05rem;">
          {{ clan.description }}
        </p>

        <ul class="clan-verbs list-unstyled d-flex flex-wrap justify-content-center justify-content-sm-start gap-2 mb-0">
          <li v-for="v in clan.verbs" :key="v" class="clan-verb">{{ v }}</li>
        </ul>
      </div>
    </header>

    <!-- ── Body ── -->
    <main class="max-content mx-auto px-3 px-sm-4 py-4 pb-5">

      <!-- In-clan Disciplines -->
      <section class="clan-section">
        <h2 class="clan-section-title font-title tracking-widest text-uppercase">
          {{ t.clan.disciplines }}
        </h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-sm-3">
          <div class="col" v-for="d in disciplines" :key="d.id">
            <button
              type="button"
              class="disc-mini-card"
              :style="{ '--card-color': d.color, '--card-glow': d.colorGlow }"
              @click="goDiscipline(d.id)"
            >
              <span class="disc-mini-art" aria-hidden="true">
                <span v-html="DISCIPLINE_ICONS[d.iconType]" class="disc-mini-icon sigil"></span>
              </span>
              <span class="disc-mini-body">
                <span class="disc-mini-name font-title">{{ d.name }}</span>
                <span class="disc-mini-meta">{{ d.meta }}</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <!-- Bane -->
      <section class="clan-section">
        <h2 class="clan-section-title font-title tracking-widest text-uppercase">
          {{ t.clan.bane }}
        </h2>
        <div class="clan-trait clan-trait--bane">
          <h3 class="clan-trait-name font-title">{{ clan.bane.name }}</h3>
          <p class="clan-trait-desc mb-0">{{ clan.bane.description }}</p>
        </div>
      </section>

      <!-- Compulsion -->
      <section class="clan-section">
        <h2 class="clan-section-title font-title tracking-widest text-uppercase">
          {{ t.clan.compulsion }}
        </h2>
        <div class="clan-trait clan-trait--compulsion">
          <h3 class="clan-trait-name font-title">{{ clan.compulsion.name }}</h3>
          <p class="clan-trait-desc mb-0">{{ clan.compulsion.description }}</p>
        </div>
      </section>

    </main>
  </div>

  <!-- ── Not found ── -->
  <div v-else class="min-vh-100 bg-void font-body text-parchment d-flex flex-column
                     align-items-center justify-content-center text-center px-4 gap-3">
    <p class="text-parchment-dim fst-italic mb-0">{{ t.clan.notFound }}</p>
    <button class="back-btn" @click="router.push('/')">{{ t.clan.backHome }}</button>
  </div>
</template>
