import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useStoreActions } from 'src/shared/store'

import { UiDashboardLayout } from 'ui'
import { Sidebar } from './sections/sidebar'
import { Metrics } from './sections/metrics'
import { Charts } from './sections/charts'

export const Stats: NextPage = () => {

  const initialize = useStoreActions((actions) => actions.initialize)

  useEffect(() => {
    initialize()
  }, [])

  return (
    <>
      <UiDashboardLayout
        left={<Sidebar/>}
        right={<Metrics/>}
        main={<Charts/>}
      />
    </>
  )
}
