import React, { useCallback } from 'react'
import { useStoreState, useStoreActions } from 'src/shared/store'
import { toM, formatNumber } from 'src/shared'
import {
  MdLeaderboard,
  MdAttachMoney,
  MdAutoGraph,
  MdDeviceThermostat,
  MdNightlight,
  MdTrendingDown,
} from "react-icons/md";

import { UiText, UiSelector } from 'ui'

import styles from './metrics.module.scss'

export const Metrics = () => {
  const crypto = useStoreState((state) => state.crypto)
  const m = useStoreState((state) => state.cryptoMetrics)

  const values = [
    [MdDeviceThermostat, 'Rank', m?.marketcap?.rank, null, 0],
    [MdAttachMoney, 'Price', m?.market_data?.price_usd?.toFixed?.(2), '$', 2],
    [MdLeaderboard, 'Marketcap', toM(m?.marketcap?.current_marketcap_usd), 'M$', 1],
    [MdAutoGraph, 'Volume', toM(m?.market_data?.real_volume_last_24_hours), 'M$', 1],
  ]

  const show = (value: any) => m ? value : <>&mdash;</>

  return (
    <>
      <UiText type="h2" className={styles.heading}>{crypto} Metrics</UiText>

      {values.map(([Icon, name, value, unit, decimals]) => (
        <div key={name} className={styles.attribute}>
          <Icon className={styles.attributeIcon}/>
          <span className={styles.attributeName}>{name}</span>
          <span className={styles.attributeValue}>
            {show(formatNumber(value, decimals))}
          </span>
          <span className={styles.attributeUnit}>
            {unit}
          </span>
        </div>
      ))}

      <div className={styles.moon}>
        <div className={styles.moonIcons}>
          <MdTrendingDown className={styles.moonIcon}/>
          <MdNightlight className={styles.moonIcon}/>
        </div>
        <div className={styles.moonBar}>
          <div
            className={styles.moonBarProgress}
            style={{width: `${(m?.market_data?.price_usd / m?.all_time_high?.price * 100) || 0}%`}}
          />
        </div>
        <div className={styles.moonInfo}>
          The current price is {show(m?.all_time_high?.percent_down?.toFixed?.(0))}% less than the higher price
        </div>
      </div>
    </>
  )
}
