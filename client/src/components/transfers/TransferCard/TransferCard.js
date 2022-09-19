import React from 'react'
import style from './TransferCard.module.scss'
import {Link} from 'react-router-dom'
import Proptypes from 'prop-types'

const TransferCard = ({key, player, image, from_team, to_team}) => {
  return (
    <Link to={{pathname: key}}>
      <div className={style.card_cont}>
        <img className={style.image} src={image} alt={'img'} />
        <h2 className={style.title}>{player}</h2>
        <p className={style.description}>{`From Team: ${from_team}`}</p>
        <p className={style.description}>{`To Team: ${to_team}`}</p>
      </div>
    </Link>
  )
}

TransferCard.propTypes = {
  key: Proptypes.string,
  player: Proptypes.string,
  image: Proptypes.string,
  from_team: Proptypes.string,
  to_team: Proptypes.string,
}

export default TransferCard
