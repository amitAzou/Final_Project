import React from 'react'

import Navbar from '../main/NavBar'

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=53f114ac392c452c81eaa033513dd209&response_type=code&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&redirect_uri=http://localhost:3001/podcasts'

export default function Login() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <a
          className="btn btn-success btn-lg"
          style={{width: '200px'}}
          href={AUTH_URL}
        >
          Login With Spotify
        </a>
      </div>
    </div>
  )
}
