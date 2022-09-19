import React, {useState, useEffect} from 'react'
import useAuth from './authSpotify'
import Player from './player'
import TrackSearchResult from './TrackSearchResult'
import {Form} from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import Navbar from '../main/NavBar'
import style from '../podcasts/dashboard.module.scss'

const spotifyApi = new SpotifyWebApi({
  clientId: '53f114ac392c452c81eaa033513dd209',
})

// eslint-disable-next-line react/prop-types
export default function Dashboard({code}) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch('')
  }

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi
      .search(search, [
        'album',
        'artist',
        'playlist',
        'track',
        'show',
        'episode',
      ])
      .then((res) => {
        console.log(res.body.tracks, res.body.shows, res.body.episodes)
        if (cancel) return
        setSearchResults(
          res.body.episodes.items.map((show) => {
            const smallestAlbumImage = show.images.reduce((smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            }, show.images[0])

            return {
              title: show.name,
              uri: show.uri,
              albumUrl: smallestAlbumImage.url,
            }
          })
        )
      })

    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <div>
      <Navbar />
      <div className={style.first_row}>
        <h1 className={style.headline}>My Podcasts</h1>
      </div>
      <div className={style.second_row}>
        <Form.Control
          style={{width: '800px', alignSelf: 'center', textAlign: 'center'}}
          type="search"
          placeholder="Search Songs/Artists"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br />
      <div className={style.third_row}>
        <div className={style.card_container}>
          {searchResults.map((track) => (
            <TrackSearchResult
              track={track}
              key={track.uri}
              chooseTrack={chooseTrack}
            />
          ))}
        </div>
      </div>
      <div className={style.fourth_row}>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  )
}
