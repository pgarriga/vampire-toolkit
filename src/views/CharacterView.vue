<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import ClanPicker from '../components/ClanPicker.vue'
import PageNav from '../components/PageNav.vue'
import PowerCard from '../components/PowerCard.vue'
import { CLAN_ICONS } from '../icons/clans'
import { DISCIPLINE_ICONS } from '../icons/disciplines'
import { useI18n } from '../composables/useI18n'
import { useClans } from '../composables/useClans'
import { useCharacters, GENERATIONS, DEFAULT_GENERATION } from '../composables/useCharacters'
import { useCharacterPowers } from '../composables/useCharacterPowers'
import { useRouteCharacter } from '../composables/useRouteCharacter'
import { artGradient, levelDots } from '../helpers'
import type { ClanIconType } from '../types'

const router = useRouter()
const { t } = useI18n()
const { clanById } = useClans()
const { characterJSON, deleteCharacter, updateCharacter } = useCharacters()
const { charId, character } = useRouteCharacter()

const clan = computed(() => (character.value ? clanById(character.value.clanId) : undefined))

const { groupedPowers } = useCharacterPowers(character)

const confirmDelete = ref(false)

// ── "More options" menu ──────────────────────────────────────────────────────

const menuOpen = ref(false)
const menuRoot = ref<HTMLElement | null>(null)

function chooseExport(): void { menuOpen.value = false; downloadCharacter() }
function chooseDelete(): void { menuOpen.value = false; confirmDelete.value = true }

// Dismissible the same three ways the overlay menu is: click outside, Escape, and
// leaving the sheet. The toggle's own click is inside menuRoot, so it never self-closes.
function onDocPointer(e: MouseEvent): void {
  if (!menuOpen.value) return
  if (menuRoot.value && !menuRoot.value.contains(e.target as Node)) menuOpen.value = false
}
function onDocKey(e: KeyboardEvent): void {
  if (e.key === 'Escape') menuOpen.value = false
}
onMounted(() => {
  document.addEventListener('click', onDocPointer)
  document.addEventListener('keydown', onDocKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocPointer)
  document.removeEventListener('keydown', onDocKey)
})

// ── Editing the name and clan ────────────────────────────────────────────────

const editing     = ref(false)
const draftName   = ref('')
const draftClan   = ref<ClanIconType | null>(null)
const draftGen    = ref<number>(DEFAULT_GENERATION)
const editInput   = ref<HTMLInputElement | null>(null)

const canSaveEdit = computed(() => draftName.value.trim().length > 0 && !!draftClan.value)

function startEdit(): void {
  const c = character.value
  if (!c) return
  draftName.value = c.name
  draftClan.value = c.clanId
  // A character made before this field existed has none; the form offers V5's
  // standard 13th, which the player confirms by saving rather than it being assumed.
  draftGen.value  = c.generation ?? DEFAULT_GENERATION
  editing.value   = true
  nextTick(() => editInput.value?.focus())
}

function saveEdit(): void {
  if (!canSaveEdit.value || !draftClan.value) return
  updateCharacter(charId.value, { name: draftName.value, clanId: draftClan.value, generation: draftGen.value })
  editing.value = false
}

// Leaving the sheet — or switching to another character — drops a half-finished edit
// rather than carrying the draft over to whoever is shown next.
watch(charId, () => { editing.value = false; menuOpen.value = false; confirmDelete.value = false })

function goPower(discId: string, powerId: string) {
  router.push(`/discipline/${discId}/power/${powerId}?from=character`)
}

function powerCountLabel(n: number): string {
  return `${n} ${n !== 1 ? t.value.characters.powers : t.value.characters.power}`
}

function removeCharacter() {
  deleteCharacter(charId.value)
  router.replace('/')
}

/**
 * Writes the character's own localStorage entry out as a file, byte for byte — so a
 * saved file and a stored character are the same JSON.
 */
function downloadCharacter(): void {
  const json = characterJSON(charId.value)
  if (!json) return
  let url = ''
  try {
    const slug = (character.value?.name ?? 'character')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'character'
    const a = document.createElement('a')
    url = URL.createObjectURL(new Blob([json], { type: 'application/json' }))
    a.href = url
    a.download = `${slug}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
  } catch (err) {
    console.error('Character download failed', err)
    alert(t.value.characters.downloadError)
  } finally {
    if (url) URL.revokeObjectURL(url)
  }
}
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment" v-if="character">

    <PageNav :back-label="t.characters.back" :current="character.name" truncate @back="router.push('/')" />

    <!-- ── Character header: the clan, then the name ── -->
    <header v-if="!editing"
            class="d-flex flex-column flex-sm-row gap-3 gap-sm-4 align-items-center align-items-sm-center
                   px-4 px-sm-5 py-4 border-bottom border-void-border max-content mx-auto"
            :style="{ '--card-color': clan?.color, '--card-glow': clan?.colorGlow }">

      <div class="discipline-page-icon clan-medallion flex-shrink-0" aria-hidden="true">
        <div v-if="clan" v-html="CLAN_ICONS[clan.id]" class="disc-icon-inner sigil"></div>
      </div>

      <div class="text-center text-sm-start w-100">
        <h1 class="font-title fw-bold tracking-wide text-white mb-1"
            style="font-size: clamp(1.4rem,4vw,2.2rem);"
            :style="{ textShadow: '0 0 20px ' + (clan?.colorGlow ?? 'transparent') }">
          {{ character.name }}
        </h1>
        <div class="clan-line">
          <button v-if="clan" class="clan-link" @click="router.push(`/clan/${clan.id}`)">
            <span class="visually-hidden">{{ t.characters.clan }}:</span>
            {{ clan.name }}
            <span class="clan-link-nickname">· {{ clan.nickname }}</span>
          </button>
          <span v-if="character.generation" class="char-generation">
            {{ t.characters.generation }} {{ character.generation }}
          </span>
        </div>

        <!-- ── Actions, under the name. The whole header is hidden while editing,
                 because the edit panel carries its own Save/Cancel. ── -->
        <div class="char-actions">
          <template v-if="!confirmDelete">
            <button class="char-action" :aria-label="t.characters.editAria" @click="startEdit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>
              </svg>
              {{ t.characters.edit }}
            </button>

            <div ref="menuRoot" class="char-menu">
              <button class="char-action"
                      :aria-expanded="menuOpen"
                      aria-controls="char-more-menu"
                      :aria-label="t.characters.more"
                      @click="menuOpen = !menuOpen">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8"/>
                </svg>
                {{ t.characters.more }}
              </button>

              <div v-if="menuOpen" id="char-more-menu" class="char-menu-panel" role="menu">
                <button class="char-menu-item" role="menuitem"
                        :aria-label="t.characters.downloadAria" @click="chooseExport">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 20h16"/>
                  </svg>
                  {{ t.characters.download }}
                </button>
                <button class="char-menu-item char-menu-item--danger" role="menuitem"
                        :aria-label="t.characters.deleteAria" @click="chooseDelete">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                  </svg>
                  {{ t.characters.delete }}
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <span class="char-actions-confirm">{{ t.characters.confirmDelete }}</span>
            <button class="char-action char-action--danger" @click="removeCharacter">{{ t.characters.delete }}</button>
            <button class="char-action" @click="confirmDelete = false">{{ t.characters.cancel }}</button>
          </template>
        </div>
      </div>
    </header>

    <!-- ── Editing the name and clan ── -->
    <section v-else class="char-edit-panel px-4 px-sm-5 py-4 border-bottom border-void-border
                           char-form-wrap mx-auto"
             :aria-label="t.characters.edit">
      <label class="char-form-label font-title" for="char-edit-name">{{ t.characters.editName }}</label>
      <input
        id="char-edit-name"
        ref="editInput"
        v-model="draftName"
        class="field-input"
        type="text"
        maxlength="60"
        autocomplete="off"
        :placeholder="t.characters.namePlaceholder"
        @keydown.enter.prevent="saveEdit"
        @keydown.esc="editing = false"
      />

      <label class="char-form-label font-title" for="char-edit-gen">{{ t.characters.generation }}</label>
      <select id="char-edit-gen" v-model.number="draftGen" class="field-select"
              aria-describedby="char-edit-gen-hint">
        <option v-for="g in GENERATIONS" :key="g" :value="g">{{ g }}</option>
      </select>
      <p id="char-edit-gen-hint" class="text-parchment-dim small mb-0">{{ t.characters.generationHint }}</p>

      <p class="char-form-label font-title mb-0">{{ t.characters.editClan }}</p>
      <ClanPicker v-model="draftClan" />

      <div class="char-form-actions">
        <button class="settings-option" type="button" @click="editing = false">{{ t.characters.cancel }}</button>
        <button class="settings-option char-form-primary" type="button"
                :disabled="!canSaveEdit" @click="saveEdit">
          {{ t.characters.save }}
        </button>
      </div>
    </section>

    <!-- ── Powers ── -->
    <div class="px-3 px-sm-4 py-4 pb-5 max-content mx-auto">

      <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
        <h2 class="clan-section-title font-title text-uppercase mb-0">{{ t.characters.disciplines }}</h2>
        <button class="char-action" @click="router.push(`/character/${charId}/add`)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
          {{ t.characters.add }}
        </button>
      </div>

      <!-- Empty state -->
      <div v-if="!groupedPowers.length"
           class="d-flex flex-column align-items-center justify-content-center gap-3 p-4 text-center">
        <div class="star-empty-icon">★</div>
        <p class="text-parchment-dim mb-1">{{ t.characters.emptyPowers }}</p>
        <p class="text-parchment-faint small mb-0">{{ t.characters.emptyPowersHint }}</p>
        <button class="settings-option mt-2" @click="router.push(`/character/${charId}/add`)">
          {{ t.characters.addTitle }}
        </button>
      </div>

      <template v-else>
        <div v-for="group in groupedPowers" :key="group.discipline.id" class="mb-5">

          <!-- Discipline header -->
          <div class="d-flex align-items-center gap-3 mb-3 pb-2"
               :style="{ borderBottom: '1px solid ' + group.discipline.color + '55' }">
            <div class="disc-group-icon"
                 :style="{ background: artGradient(group.discipline), border: '1px solid ' + group.discipline.color + '66' }"
                 aria-hidden="true">
              <div v-html="DISCIPLINE_ICONS[group.discipline.iconType]"
                   class="sigil"
                   :style="{ '--card-color': group.discipline.color }"
                   style="width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;"></div>
            </div>
            <h3 class="font-title fw-bold text-white mb-0"
                style="font-size:1.05rem;"
                :style="{ textShadow: '0 0 10px ' + group.discipline.colorGlow }">
              {{ group.discipline.name }}
            </h3>
            <span class="disc-rating ms-auto" aria-hidden="true">
              <span v-for="(filled, i) in levelDots(group.powers.length)" :key="i"
                    class="power-dot" :class="{ filled }"></span>
            </span>
            <span class="visually-hidden">{{ powerCountLabel(group.powers.length) }}</span>
          </div>

          <!-- Power cards grid -->
          <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 g-sm-3">
            <div class="col" v-for="power in group.powers" :key="power.id">
              <PowerCard :discipline="group.discipline" :power="power" :heading-level="4"
                         @open="goPower(group.discipline.id, power.id)" />
            </div>
          </div>

        </div>
      </template>

    </div>

  </div>

  <!-- ── Not found ── -->
  <div v-else class="min-vh-100 bg-void font-body text-parchment d-flex flex-column
                     align-items-center justify-content-center gap-3 p-5 text-center">
    <p class="text-parchment-dim mb-0">{{ t.characters.notFound }}</p>
    <button class="settings-option" @click="router.push('/')">{{ t.characters.backHome }}</button>
  </div>
</template>
