import React, { useCallback } from 'react'
import type { NextPage } from 'next'

import { UiDashboardLayout } from 'ui'
import { Sidebar } from './sections/sidebar'
import { Metrics } from './sections/metrics'

export const Stats: NextPage = () => {

  return (
    <>
      <UiDashboardLayout
        left={<Sidebar/>}
        right={<Metrics/>}
      />
    </>
  )
}
