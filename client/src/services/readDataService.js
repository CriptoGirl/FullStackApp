import api from './api'
export default {
  readData () {
    return api().get('search')
  }
}
