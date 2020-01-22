import storeAuth from '../store/store-auth'

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = storeAuth.state.loggedIn
    if (loggedIn) {
      next()
    } else {
      if (to.path !== '/auth') {
        next('/auth')
      } else {
        next()
      }
    }
  })
}
