import storeAuth from '../store/store-auth'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = storeAuth.state.loggedIn
    if (loggedIn || to.path === '/auth') next()
    else next('/auth')
  })
}
