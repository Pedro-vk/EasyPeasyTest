import React, { useCallback } from 'react'
import { useStoreState } from 'src/shared/store'

import { UiText } from 'ui'

import styles from './sidebar.module.scss'

export const Sidebar = () => {
  const crypto = useStoreState((state) => state.crypto)
  const cryptoList = useStoreState((state) => state.cryptoList)

  return (
    <>
      <UiText type="h1" className={styles.heading}>Massari Stats</UiText>
      <UiText type="h2">{crypto} metrics</UiText>
    </>
  )
}
