import Vue from 'vue'
import Vuex from 'vuex'
import myData from './store-myData'
Vue.use(Vuex)
export default function () {
  const Store = new Vuex.Store({
    modules: {
      myData
    },
    strict: process.env.DEV
  })
  return Store
}
