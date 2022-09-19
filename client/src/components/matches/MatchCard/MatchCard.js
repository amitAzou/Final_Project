import React from 'react'
import style from './MatchCard.module.scss'
import Proptypes from 'prop-types'

const MatchCard = ({
  competitionName,
  competitionImage,
  fullMatchDate,
  matchTime,
  homeClubName,
  homeClubImage,
  awayClubName,
  awayClubImage,
}) => {
  return (
    <div className={style.card_cont}>
      <p className={style.text}>{competitionName}</p>
      <img className={style.image} src={competitionImage} alt={'img'} />
      <p className={style.text}>{fullMatchDate}</p>
      <p className={style.text}>{matchTime}</p>
      <p className={style.text}>{homeClubName}</p>
      <img className={style.image} src={homeClubImage} alt={'img'} />
      <p className={style.text}>{awayClubName}</p>
      <img className={style.image} src={awayClubImage} alt={'img'} />
    </div>
  )
}

MatchCard.propTypes = {
  competitionName: Proptypes.string,
  competitionImage: Proptypes.string,
  fullMatchDate: Proptypes.string,
  matchTime: Proptypes.string,
  homeClubName: Proptypes.string,
  homeClubImage: Proptypes.string,
  awayClubName: Proptypes.string,
  awayClubImage: Proptypes.string,
}

export default MatchCard
