import React, {useEffect, useState} from 'react'
import Navbar from '../../components/main/NavBar'
import style from '../podcasts/podcasts.module.scss'
import TransferCard from '../../components/transfers/TransferCard/TransferCard'
import SiteLogo from '../../components/common/SiteLogo/SiteLogo'
import {getTransfersByCountry} from '../../services/transfers'
import {country_codes, ItalyInitData} from './country_codes'

const Transfers = () => {
  const [transfers, setTransfers] = useState([])
  const [transfers2, setTransfers2] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [isLoaded2, setLoaded2] = useState(false)

  async function setData() {
    try {
      setTimeout(function () {
        const data = ItalyInitData
        setTransfers(data)
        setLoaded(true)
      }, 1000)

      const dataArrays = await Promise.all(
        Object.values(country_codes).map(getTransfersByCountry)
      )
      const data2 = dataArrays.flat(1)
      setTransfers2(data2)
      setLoaded2(true)
    } catch (err) {
      setTransfers([])
      console.error(err)
    }
  }

  useEffect(() => {
    setData()
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={style.first_row}>
        <h1 className={style.headline}>Transfers</h1>
      </div>
      <div className={style.third_row}>
        <div className={style.card_container}>
          {isLoaded ? (
            transfers.map((transferItem) => {
              return (
                <TransferCard
                  key={Math.random().toString()}
                  player={transferItem.player}
                  image={transferItem.image}
                  from_team={transferItem.from_team}
                  to_team={transferItem.to_team}
                />
              )
            })
          ) : (
            <div className={style.loading}>Loading Transfers...</div>
          )}
          {isLoaded2
            ? transfers2.map((transferItem) => {
                return (
                  <TransferCard
                    key={Math.random().toString()}
                    player={transferItem.player}
                    image={transferItem.image}
                    from_team={transferItem.from_team}
                    to_team={transferItem.to_team}
                  />
                )
              })
            : isLoaded && (
                <div className={style.loading2}>Loading More Transfers...</div>
              )}
        </div>
      </div>
      <div className={style.fourth_row}>
        <SiteLogo />
      </div>
    </div>
  )
}

export default Transfers
