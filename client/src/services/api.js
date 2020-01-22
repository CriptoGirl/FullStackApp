import axios from 'axios'
import storeAuth from '../store/store-auth'

// export default () => {
//   return axios.create({
//     baseURL: `http://localhost:8081/`,
//    headers: { authorisation: `Bearer ${token}` }
//    })
//   })
// }

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storeAuth.state.authToken}`
    }
  })
}
