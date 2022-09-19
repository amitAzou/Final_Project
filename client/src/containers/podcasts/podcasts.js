import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../../components/podcasts/login'
import Dashboard from '../../components/podcasts/Dashboard'

// eslint-disable-next-line no-undef
const code = new URLSearchParams(window.location.search).get('code')
console.log('code' + code)

function Podcasts() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default Podcasts
