import React, { useCallback } from 'react'
import type { NextPage } from 'next'

import { UiText, UiDashboardLayout } from 'ui'

export const Stats: NextPage = () => {

  return (
    <>
      <UiDashboardLayout
        left={(
          <UiText type="h1">Massari Stats</UiText>
        )}
      />
    </>
  )
}
