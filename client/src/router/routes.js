// import storeAuth from '../store/store-auth'

const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/saveData', component: () => import('pages/SaveData.vue') },
      { path: '/search', component: () => import('pages/Search.vue') },
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
