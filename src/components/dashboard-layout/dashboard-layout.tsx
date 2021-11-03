import React, { Props, ForwardedRef } from 'react'
import { BEM, modList, extendClassName } from 'ui'
import styles from './dashboard-layout.module.scss'

interface DashboardLayoutProps {
  right?: React.ReactNode
  main?: React.ReactNode
  left?: React.ReactNode
}

const b = BEM('dashboard-layout', styles)

export const UiDashboardLayout = React.memo(function(
  props: DashboardLayoutProps & Props<any>
) {
  const {right, main, left} = props

  return (
    <>
    <div className={b()}>
      <div className={b('sidebar', ['left'])}>{left}</div>
      <div className={b('content')}>{main}</div>
      <div className={b('sidebar', ['right'])}>{right}</div>
    </div>
    </>
  )
})

UiDashboardLayout.displayName = 'UiDashboardLayout'
