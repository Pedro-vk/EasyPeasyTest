import React, { useCallback } from 'react'
import { useStoreState, useStoreActions } from 'src/shared/store'

import { UiText, UiSelector, UiChartBars } from 'ui'

import styles from './charts.module.scss'

export const Charts = () => {
  const timeData = useStoreState((state) => state.timeData)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <UiText type="h3" className={styles.containerTitle}>Price</UiText>
          <div className={styles.containerChart}>
            {timeData && <UiChartBars data={timeData}/>}
          </div>
        </div>
        <div className={[styles.container, styles.containerVolume].join(' ')}>
          <UiText type="h3" className={styles.containerTitle}>Volume</UiText>
          <div className={styles.containerChart}>
            {timeData && <UiChartBars data={timeData}/>}
          </div>
        </div>
      </div>
    </>
  )
}
