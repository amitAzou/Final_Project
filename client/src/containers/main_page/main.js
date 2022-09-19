import React from 'react'
import podcast_image from '../../images/my-podcasts.jpeg'
import news_image from '../../images/sports-news.jpeg'
import transfers from '../../images/transfer-market.jpeg'
import sport_hub from '../../images/sport-hub.png'
import {Link} from 'react-router-dom'
import Navbar from '../../components/main/NavBar'
import style from './main.module.scss'
import SiteLogo from '../../components/common/SiteLogo/SiteLogo'

const Main = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.headline}>
        <img className={style.title} src={sport_hub} alt={'img'} />
      </div>
      <div className={style.first_row}>
        <Link to={{pathname: '/podcasts'}}>
          <img className={style.image} src={podcast_image} alt={'img'} />
        </Link>
        <Link to={{pathname: '/matches'}}>
          <img className={style.image} src={news_image} alt={'img'} />
        </Link>
        <Link to={{pathname: '/transfers'}}>
          <img className={style.image} src={transfers} alt={'img'} />
        </Link>
      </div>
      <div className={style.bottom_row}>
        <SiteLogo />
      </div>
    </div>
  )
}

export default Main
