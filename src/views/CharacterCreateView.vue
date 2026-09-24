<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import ClanPicker from '../components/ClanPicker.vue'
import { useI18n } from '../composables/useI18n'
import { useCharacters, GENERATIONS, DEFAULT_GENERATION } from '../composables/useCharacters'
import type { ClanIconType } from '../types'
import PageNav from '../components/PageNav.vue'

const router = useRouter()
const { t } = useI18n()
const { createCharacter } = useCharacters()

const step   = ref<1 | 2>(1)
const name   = ref('')
const clanId = ref<ClanIconType | null>(null)
const generation = ref<number>(DEFAULT_GENERATION)

const nameInput = ref<HTMLInputElement | null>(null)

const trimmedName = computed(() => name.value.trim())
const canContinue = computed(() => trimmedName.value.length > 0)

function goStep2(): void {
  if (!canContinue.value) return
  step.value = 2
}

function goStep1(): void {
  step.value = 1
  nextTick(() => nameInput.value?.focus())
}

function save(): void {
  if (!canContinue.value || !clanId.value) return
  const created = createCharacter(trimmedName.value, clanId.value, generation.value)
  router.replace(`/character/${created.id}`)
}

function cancel(): void {
  router.push('/')
}

// Focus the name field on arrival — it is the only thing to do on this step.
watch(nameInput, el => el?.focus(), { immediate: true })
</script>

<template>
  <div class="min-vh-100 bg-void font-body text-parchment">

    <PageNav :back-label="step === 1 ? t.characters.back : t.characters.previous"
             :current="t.characters.newTitle" @back="step === 1 ? cancel() : goStep1()" />

    <main class="char-form-wrap mx-auto px-4 py-4 pb-5">

      <!-- Step indicator -->
      <ol class="char-steps" :aria-label="t.characters.newTitle">
        <li class="char-step" :class="{ active: step === 1, done: step > 1 }">
          <span class="char-step-num" aria-hidden="true">1</span>{{ t.characters.nameStep }}
        </li>
        <li class="char-step" :class="{ active: step === 2 }">
          <span class="char-step-num" aria-hidden="true">2</span>{{ t.characters.clanStep }}
        </li>
      </ol>

      <!-- ── Step 1 — name ── -->
      <section v-if="step === 1" class="char-form-step">
        <label class="char-form-label font-title" for="char-name">{{ t.characters.nameLabel }}</label>
        <input
          id="char-name"
          ref="nameInput"
          v-model="name"
          class="field-input"
          type="text"
          maxlength="60"
          autocomplete="off"
          :placeholder="t.characters.namePlaceholder"
          @keydown.enter.prevent="goStep2"
        />

        <label class="char-form-label font-title" for="char-generation">{{ t.characters.generation }}</label>
        <select id="char-generation" v-model.number="generation" class="field-select"
                :aria-describedby="'char-generation-hint'">
          <option v-for="g in GENERATIONS" :key="g" :value="g">{{ g }}</option>
        </select>
        <p id="char-generation-hint" class="text-parchment-dim small mb-0">{{ t.characters.generationHint }}</p>
        <div class="char-form-actions">
          <button class="settings-option" type="button" @click="cancel">{{ t.characters.cancel }}</button>
          <button class="settings-option char-form-primary" type="button"
                  :disabled="!canContinue" @click="goStep2">
            {{ t.characters.next }}
          </button>
        </div>
      </section>

      <!-- ── Step 2 — clan ── -->
      <section v-else class="char-form-step">
        <p class="char-form-label font-title mb-0">{{ t.characters.clanLabel }}</p>
        <p class="text-parchment-dim small mb-0">{{ trimmedName }}</p>

        <ClanPicker v-model="clanId" />

        <div class="char-form-actions">
          <button class="settings-option" type="button" @click="goStep1">{{ t.characters.previous }}</button>
          <button class="settings-option char-form-primary" type="button"
                  :disabled="!clanId" @click="save">
            {{ t.characters.save }}
          </button>
        </div>
      </section>

    </main>

  </div>
</template>
