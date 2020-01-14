import api from './api'
export default {
  saveData (myDataItem) {
    return api().post('saveData', myDataItem)
  }
}
