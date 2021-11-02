import React, { useCallback } from 'react'
import type { NextPage } from 'next'

import { UiDashboardLayout } from 'ui'
import { Sidebar } from './sections/sidebar'

export const Stats: NextPage = () => {

  return (
    <>
      <UiDashboardLayout
        left={(
          <Sidebar/>
        )}
      />
    </>
  )
}
