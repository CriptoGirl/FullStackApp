import Vue from 'vue'
import { uid } from 'quasar'
import readDataService from '../services/readDataService'
const state = {
  myData_view: [
    { name: 'code', required: true, label: 'Code', align: 'left', field: 'code' },
    { name: 'name', label: 'Name', field: 'name', align: 'left' },
    { name: 'description', label: 'Description', field: 'description', align: 'left' }
  ],
  myData: [],
  myDataObject: {
    'id01':
      { code: 'CD1', name: 'First', description: 'First Data Item', status: 'current' },
    'id02':
      { code: 'CD2', name: 'Second', description: 'Second Data Item', status: 'current' },
    'id03':
      { code: 'CD3', name: 'Third', description: 'Third Data Item', status: 'current' }
  },
  XXXmyData: [
    { code: 'CD1', name: 'First', description: 'First Data Item', status: 'current' },
    { code: 'CD2', name: 'Second', description: 'Second Data Item', status: 'current' },
    { code: 'CD3', name: 'Third', description: 'Third Data Item', status: 'current' }
  ]
}
const mutations = {
  addMyDataObjectItem (state, payload) {
    console.log('addMyDataItem mutation')
    Vue.set(state.myData, payload.id, payload.data)
    // state.myData.push({ newDataItem })
    // console.log('after Vue set')
  },
  addMyDataItem (state, newDataItem) {
    state.myData.push(newDataItem)
  },
  loadMyData (state, myData) {
    console.log('loadMyData mutation')
    console.log(state.myData)
    state.myData = []
    state.myData = myData
  }
}
const actions = {
  async addMyDataItem ({ commit }, newDataItem) {
    commit('addMyDataItem', newDataItem)
  },
  addMyDataObjectItem ({ commit }, newDataItem) {
    let id = uid()
    let payload = {
      id: id,
      data: newDataItem
    }
    commit('addMyDataObjectItem', payload)
  },
  async loadMyData ({ commit }) {
    console.log('loadMyData action')
    try {
      const response = await readDataService.readData()
      console.log(response.data)
      if (response.data) {
        const myData = response.data
        commit('loadMyData', myData)
      }
    } catch (error) {
      const errorMessage = error.response.data.error
      console.log(errorMessage)
    }
  }
}
const getters = {
  myData: (state) => {
    return state.myData
  },
  myData_view: (state) => { return state.myData_view }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
