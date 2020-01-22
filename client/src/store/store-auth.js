import { firebaseAuth } from 'boot/firebase.js'
import { errorPopUp } from 'src/functions/errorPopUp'
import { infoPopUp } from 'src/functions/messagePopUp'
// import { Notify } from 'quasar'
// import router from './router';

const state = {
  loggedIn: false,
  authToken: null
}
const mutations = {
  setLoggedIn (state, value) {
    state.loggedIn = value
  },
  setToken (state, value) {
    state.authToken = value
  }
}
const actions = {
  goToHomePage () {
    this.$router.push('/')
  },
  authStateChange ({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(function (idToken) {
          console.log('TOKEN: ', idToken)
          commit('setLoggedIn', true)
          commit('setToken', idToken)
          dispatch('goToHomePage')
        })
      } else {
        commit('setLoggedIn', false)
        commit('setToken', null)
        this.$router.replace('/auth')
      }
    })
  },
  registerUser ({ commit }, user) {
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(response => {
        console.log('User registered, response: ', response)
        infoPopUp('User registered')
        // Notify({ color: 'green-4', textColor: 'white', icon: 'cloud_done', message: 'User Registered' })
      })
      .catch(error => {
        console.log(error.message)
        errorPopUp(error.message)
      })
  },
  loginUser ({ commit }, user) {
    firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
        console.log('user refresh token: ', response.user.refreshToken)
      })
      .catch(error => {
        errorPopUp(error.message)
      })
  },
  logoutUser () {
    firebaseAuth.signOut()
  }
}
const getters = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
