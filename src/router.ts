import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView         from './views/HomeView.vue'
import DisciplinesView  from './views/DisciplinesView.vue'
import DisciplineView   from './views/DisciplineView.vue'
import PowerView        from './views/PowerView.vue'
import ClansView        from './views/ClansView.vue'
import ClanView         from './views/ClanView.vue'
import MyPowersView     from './views/MyPowersView.vue'
import SettingsView     from './views/SettingsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',                                  component: HomeView        },
    { path: '/disciplines',                       component: DisciplinesView },
    { path: '/discipline/:id',                    component: DisciplineView  },
    { path: '/discipline/:id/power/:powerId',     component: PowerView       },
    { path: '/clans',                             component: ClansView       },
    { path: '/clan/:id',                          component: ClanView        },
    { path: '/my-powers',                         component: MyPowersView    },
    { path: '/settings',                          component: SettingsView    },
    { path: '/:pathMatch(.*)*',                   redirect: '/'              },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
