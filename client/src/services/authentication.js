import axios from 'axios'

export const getToken = ({username, password}) =>
  axios.post(`login/${username}/${password}`).then(({data}) => data)

export const authenticate = (setLoggedIn) => {
  if (localStorage.getItem('token')) {
    setLoggedIn('true')
  }
}
