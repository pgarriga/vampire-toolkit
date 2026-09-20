import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView         from './views/HomeView.vue'
import DisciplinesView  from './views/DisciplinesView.vue'
import DisciplineView   from './views/DisciplineView.vue'
import PowerView        from './views/PowerView.vue'
import TraitsView       from './views/TraitsView.vue'
import TraitView        from './views/TraitView.vue'
import ClansView        from './views/ClansView.vue'
import ClanView         from './views/ClanView.vue'
import CharacterCreateView from './views/CharacterCreateView.vue'
import CharacterView    from './views/CharacterView.vue'
import CharacterAddView from './views/CharacterAddView.vue'
import SettingsView     from './views/SettingsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',                                  component: HomeView        },
    { path: '/disciplines',                       component: DisciplinesView },
    { path: '/discipline/:id',                    component: DisciplineView  },
    { path: '/discipline/:id/power/:powerId',     component: PowerView       },
    { path: '/traits',                            component: TraitsView      },
    { path: '/trait/:id',                         component: TraitView       },
    { path: '/clans',                             component: ClansView       },
    { path: '/clan/:id',                          component: ClanView        },
    { path: '/character/new',                     component: CharacterCreateView },
    { path: '/character/:id',                     component: CharacterView   },
    { path: '/character/:id/add',                 component: CharacterAddView },
    { path: '/settings',                          component: SettingsView    },
    { path: '/:pathMatch(.*)*',                   redirect: '/'              },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
