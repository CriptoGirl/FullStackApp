import axios from 'axios'
import storeAuth from '../store/store-auth'

// export default () => {
//   return axios.create({
//     baseURL: `http://localhost:8081/`,
//    headers: { authorisation: `Bearer ${token}` }
//    })
//   })
// }

// const serverURL = process.env.FSA_SERVER_URL

export default () => {
  return axios.create({
    // baseURL: `http://localhost:8081/`,
    baseURL: `http://167.172.59.209:8081/`,
    // baseURL: process.env.FSA_SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storeAuth.state.authToken}`
    }
  })
}
