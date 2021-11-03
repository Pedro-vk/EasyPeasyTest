import React, { useCallback } from 'react'
import { useStoreState, useStoreActions } from 'src/shared/store'

import { UiText, UiSelector } from 'ui'

import styles from './charts.module.scss'

export const Charts = () => {
  const timeData = useStoreState((state) => state.timeData)

  console.log(timeData)

  return (
    <>
      Test
    </>
  )
}
