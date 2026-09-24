<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { DISCIPLINE_ICONS } from '../icons/disciplines'
import { artGradient } from '../helpers'
import { useI18n } from '../composables/useI18n'
import { useData } from '../composables/useData'
import { useClans } from '../composables/useClans'
import PageNav from '../components/PageNav.vue'
import PowerCard from '../components/PowerCard.vue'

const route  = useRoute()
const router = useRouter()
const { t } = useI18n()
const { disciplineById } = useData()
const { clanSigil } = useClans()

const discipline = computed(() => disciplineById(route.params['id'] as string))

/** `clanes` holds display names; resolve each to its mark so the chip can carry the
 *  sigil and, when there is a clan behind it, that clan's colour and a link. The
 *  Thin-Bloods have a mark but no clan page, so theirs stays a disabled chip rather
 *  than pretending to lead somewhere. */
const clanChips = computed(() =>
  (discipline.value?.clanes ?? []).map(name => {
    const sigil = clanSigil(name)
    return {
      name,
      svg: sigil?.svg,
      id: sigil?.clan?.id,
      color: sigil?.clan?.color,
      colorGlow: sigil?.clan?.colorGlow,
    }
  }),
)

function goBack():            void { router.push('/disciplines') }
function goClan(id: string):  void { router.push(`/clan/${id}`) }
function goPower(pid: string): void { router.push(`/discipline/${route.params['id']}/power/${pid}`) }
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="discipline">

    <PageNav :back-label="t.discipline.back" :current="discipline.name" @back="goBack" />

    <!-- ── Discipline header ── -->
    <header class="d-flex flex-column flex-sm-row gap-3 gap-sm-4 align-items-center align-items-sm-start
                   px-4 px-sm-5 py-4 py-sm-5 border-bottom border-void-border max-content mx-auto"
            :style="{ '--card-color': discipline.color, '--card-glow': discipline.colorGlow }">

      <!-- Icon -->
      <div class="discipline-page-icon flex-shrink-0"
           :style="{ background: artGradient(discipline) }"
           aria-hidden="true">
        <div v-html="DISCIPLINE_ICONS[discipline.iconType]"
             :style="{ '--card-color': discipline.color }"
             class="disc-icon-inner sigil"></div>
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
        </div>

        <!-- Clans get a row of their own: the chips are much taller than the other
             stats, and inline they dragged the whole row's baseline around. -->
        <div v-if="discipline.clanes.length" class="d-flex flex-column gap-1 mt-4">
          <span class="text-gold text-uppercase tracking-widest small fw-semibold">{{ t.discipline.clans }}</span>
          <div class="d-flex flex-wrap justify-content-center justify-content-sm-start gap-2">
            <button v-for="c in clanChips" :key="c.name" type="button"
                    class="clan-chip" :class="{ 'clan-chip--plain': !c.id }"
                    :disabled="!c.id"
                    :style="c.color ? { '--card-color': c.color, '--card-glow': c.colorGlow } : undefined"
                    @click="c.id && goClan(c.id)">
              <span v-if="c.svg" class="clan-chip-sigil sigil" aria-hidden="true" v-html="c.svg"></span>
              <span>{{ c.name }}</span>
            </button>
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
          <PowerCard :discipline="discipline" :power="power" @open="goPower(power.id)" />
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
