import Vue from 'vue'
import Vuex from 'vuex'
import myData from './store-myData'
import auth from './store-auth'
Vue.use(Vuex)
export default function () {
  const Store = new Vuex.Store({
    modules: {
      myData,
      auth
    },
    strict: process.env.DEV
  })
  return Store
}
