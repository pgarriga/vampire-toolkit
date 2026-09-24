import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCharacters } from './useCharacters'

/**
 * The character named by the route's `:id`, for the pages that belong to one
 * character (the sheet and its power picker).
 *
 * Opening either page also makes that character the active one, so the menu and
 * `PowerView`'s `?from=character` links follow the sheet the reader is working on.
 * That happens in setup rather than `onMounted`, so the first render already reads
 * the right character.
 */
export function useRouteCharacter() {
  const route = useRoute()
  const { characterById, setActive } = useCharacters()

  const charId    = computed(() => route.params['id'] as string)
  const character = computed(() => characterById(charId.value))

  watch(charId, id => { if (characterById(id)) setActive(id) }, { immediate: true })

  return { charId, character }
}
