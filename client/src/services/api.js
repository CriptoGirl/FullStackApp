import axios from 'axios'
import storeAuth from '../store/store-auth'

// export default () => {
//   return axios.create({
//    baseURL: `http://localhost:8081/`,
//    headers: { authorisation: `Bearer ${token}` }
//    })
//   })
// }

export default () => {
  console.log('SERVER_URL: ', process.env.SERVER_URL)
  return axios.create({
    baseURL: process.env.SERVER_URL,
    // baseURL: `http://localhost:8081/`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${storeAuth.state.authToken}`
    }
  })
}

// baseURL: `http://localhost:8081/`,
// baseURL: `http://167.172.59.209:8081/`,
