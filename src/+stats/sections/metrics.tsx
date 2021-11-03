import React, { useCallback } from 'react'
import { useStoreState, useStoreActions } from 'src/shared/store'

import { UiText, UiSelector } from 'ui'

import styles from './metrics.module.scss'

export const Metrics = () => {
  const crypto = useStoreState((state) => state.crypto)
  const cryptoList = useStoreState((state) => state.cryptoList)

  return (
    <>
      <UiText type="h2" className={styles.heading}>{crypto} Metrics</UiText>

    </>
  )
}
