import React from 'react'

// eslint-disable-next-line react/prop-types
export default function TrackSearchResult({track, chooseTrack}) {
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{cursor: 'pointer'}}
      onClick={handlePlay}
    >
      {/* eslint-disable-next-line react/prop-types */}
      <img src={track.albumUrl} style={{height: '64px', width: '64px'}} />
      <div className="ml-3">
        {/* eslint-disable-next-line react/prop-types */}
        <div>{track.title}</div>
      </div>
    </div>
  )
}
