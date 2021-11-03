import React, { useCallback } from 'react'
import { useStoreState, useStoreActions } from 'src/shared/store'

import { UiText, UiSelector } from 'ui'

import styles from './sidebar.module.scss'

export const Sidebar = () => {
  const crypto = useStoreState((state) => state.crypto)
  const cryptoList = useStoreState((state) => state.cryptoList)
  const timePeriod = useStoreState((state) => state.timePeriod)

  const changeCrypto = useStoreActions((actions) => actions.changeCrypto)
  const changeTimePeriod = useStoreActions((actions) => actions.changeTimePeriod)

  return (
    <>
      <UiText type="h1" className={styles.heading}>Massari Stats</UiText>

      <UiSelector
        title="Selected asset"
        options={cryptoList}
        value={crypto}
        onChange={changeCrypto}
      />

      <UiSelector
        title="Time period"
        options={['week', 'month', 'year']}
        value={timePeriod}
        onChange={changeTimePeriod}
      />
    </>
  )
}
