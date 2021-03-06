import React, { Props, ForwardedRef } from 'react'
import { BEM, modList, extendClassName, UiText } from 'ui'
import { toMF, toD } from 'src/shared'
import styles from './chart-bars.module.scss'

interface ChartBarsProps {
  data: {
    timestamp: number,
    volume: number,
  }[]
}

const b = BEM('chart-bars', styles)

export const UiChartBars = React.memo(function(
  props: ChartBarsProps & Props<any>
) {
  const {data} = props

  const volumes = data.map(_ => _.volume)
  const max = volumes.reduce((acc, _) => Math.max(acc, _))
  const min = volumes.reduce((acc, _) => Math.min(acc, _))

  return (
    <>
    <div className={b()}>
      <div className={b('axis', ['y'])}>
        <div className={b('axis-value')}>{toMF(max, 1)} M$</div>
        <div className={b('axis-value')}>{toMF(min, 1)} M$</div>
      </div>
      <div className={b('axis', ['x'])}>
        <div className={b('axis-value')}>{toD(data[0].timestamp)}</div>
        <div className={b('axis-value')}>{toD(data[Math.floor(data.length / 2)].timestamp)}</div>
        <div className={b('axis-value')}>{toD(data[data.length - 1].timestamp)}</div>
      </div>
      <div className={b('chart')}>
        {volumes.map((v, i) => (
          <div key={i} className={b('column')}>
            <div className={b('bar')} style={{height: `${(v - min) / (max - min) * 100}%`}} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
})
UiChartBars.displayName = 'UiChartBars'
