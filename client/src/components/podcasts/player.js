import React, {useState, useEffect} from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

// eslint-disable-next-line react/prop-types
export default function Player({accessToken, trackUri}) {
  const [play, setPlay] = useState(false)
  console.log(`track uri: ${trackUri}`)
  console.log(`access token: ${accessToken}`)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  )
}
