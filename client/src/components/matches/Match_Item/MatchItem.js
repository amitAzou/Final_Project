import React, {useEffect, useState} from 'react'
import {getMatches} from '../../../services/matches'
import MatchCard from '../MatchCard/MatchCard'
import style from '../../../containers/podcasts/podcasts.module.scss'

const MatchItem = () => {
  const [matches, setMatches] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  async function fetchData() {
    try {
      const data = await getMatches()
      console.log(data)
      setMatches(data)
      setLoaded(true)
    } catch (err) {
      setMatches([])
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className={style.first_row}>
        <h1 className={style.headline}>Live Matches</h1>
      </div>
      <div className={style.third_row}>
        <div className={style.card_container}>
          {isLoaded ? (
            matches.map((matchItem) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <MatchCard
                  competitionName={matchItem.competitionName}
                  competitionImage={matchItem.competitionImage}
                  fullMatchDate={matchItem.fullMatchDate}
                  matchTime={matchItem.matchTime}
                  homeClubName={matchItem.homeClubName}
                  homeClubImage={matchItem.homeClubImage}
                  awayClubName={matchItem.awayClubName}
                  awayClubImage={matchItem.awayClubImage}
                />
              )
            })
          ) : (
            <div className={style.loading}>Loading Matches...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MatchItem
