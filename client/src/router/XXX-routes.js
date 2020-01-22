import storeAuth from '../store/store-auth'

const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Index.vue'),
        beforeEnter: (to, from, next) => {
          if (!storeAuth.state.loggedIn) next('/auth')
          else next()
        }
      },
      { path: '/saveData',
        component: () => import('pages/SaveData.vue'),
        beforeEnter: (to, from, next) => {
          if (!storeAuth.state.loggedIn) next('/auth')
          else next()
        }
      },
      { path: '/search',
        component: () => import('pages/Search.vue'),
        beforeEnter: (to, from, next) => {
          if (!storeAuth.state.loggedIn) next('/auth')
          else next()
        }
      },
      { path: '/auth', component: () => import('pages/Auth.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
