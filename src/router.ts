import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView         from './views/HomeView.vue'
import DisciplinesView  from './views/DisciplinesView.vue'
import DisciplineView   from './views/DisciplineView.vue'
import PowerView        from './views/PowerView.vue'
import TraitsView       from './views/TraitsView.vue'
import TraitView        from './views/TraitView.vue'
import DiceView         from './views/DiceView.vue'
import ClansView        from './views/ClansView.vue'
import ClanView         from './views/ClanView.vue'
import CharacterCreateView from './views/CharacterCreateView.vue'
import CharacterView    from './views/CharacterView.vue'
import CharacterAddView from './views/CharacterAddView.vue'
import SettingsView     from './views/SettingsView.vue'

/**
 * Back and forward return the reader to where they were — a power's sheet back to
 * the same row of the grid. `App.vue` swaps pages with an out-in transition, so the
 * page being returned to is not in the DOM until the old one has left; scrolling
 * before then lands on the wrong page. The scroll therefore waits for `App.vue` to
 * report the new page going in (`pageEntering`), with a timer behind it for the
 * navigations that do not transition at all (same view, new params).
 */
let onPageEnter: (() => void) | null = null
const PAGE_ENTER_FALLBACK_MS = 600

export function pageEntering(): void {
  onPageEnter?.()
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',                                  component: HomeView        },
    { path: '/disciplines',                       component: DisciplinesView },
    { path: '/discipline/:id',                    component: DisciplineView  },
    { path: '/discipline/:id/power/:powerId',     component: PowerView       },
    { path: '/traits',                            component: TraitsView      },
    { path: '/trait/:id',                         component: TraitView       },
    { path: '/dice',                              component: DiceView        },
    { path: '/clans',                             component: ClansView       },
    { path: '/clan/:id',                          component: ClanView        },
    { path: '/character/new',                     component: CharacterCreateView },
    { path: '/character/:id',                     component: CharacterView   },
    { path: '/character/:id/add',                 component: CharacterAddView },
    { path: '/settings',                          component: SettingsView    },
    { path: '/:pathMatch(.*)*',                   redirect: '/'              },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (!savedPosition) return { top: 0 }
    return new Promise(resolve => {
      const done = () => {
        clearTimeout(timer)
        onPageEnter = null
        // `instant`: main.css sets `scroll-behavior: smooth`, which would otherwise
        // glide down from the top in front of the reader.
        resolve({ ...savedPosition, behavior: 'instant' })
      }
      const timer = setTimeout(done, PAGE_ENTER_FALLBACK_MS)
      onPageEnter = done
    })
  },
})

export default router
