import React, { Props, ForwardedRef } from 'react'
import { BEM, modList, extendClassName, UiText } from 'ui'
import { formatNumber, toD } from 'src/shared'
import styles from './chart-candle.module.scss'

interface TimeData {
  timestamp: number
  open: number
  close: number
  high: number
  low: number
}

interface ChartCandleProps {
  data: TimeData[]
}

const b = BEM('chart-candle', styles)

export const UiChartCandle = React.memo(function(
  props: ChartCandleProps & Props<any>
) {
  const {data} = props

  const max = data.map(_ => _.high).reduce((acc, _) => Math.max(acc, _))
  const min = data.map(_ => _.low).reduce((acc, _) => Math.min(acc, _))

  const barHeight = ({open, close}: TimeData) => Math.abs(open - close) / (max - min) * 100
  const barDistance = ({open, close}: TimeData) => (Math.min(close, open) - min) / (max - min) * 100
  const lineHeight = ({high, low}: TimeData) => (high - low) / (max - min) * 100
  const lineDistance = ({high, low}: TimeData) => (low - min) / (max - min) * 100
  const isUp = ({open, close}: TimeData) => open < close

  return (
    <>
    <div className={b()}>
      <div className={b('axis', ['y'])}>
        <div className={b('axis-value')}>{formatNumber(max, 2)} $</div>
        <div className={b('axis-value')}>{formatNumber(min, 2)} $</div>
      </div>
      <div className={b('axis', ['x'])}>
        <div className={b('axis-value')}>{toD(data[0].timestamp)}</div>
        <div className={b('axis-value')}>{toD(data[Math.floor(data.length / 2)].timestamp)}</div>
        <div className={b('axis-value')}>{toD(data[data.length - 1].timestamp)}</div>
      </div>
      <div className={b('chart')}>
        {data.map((v, i) => (
          <div key={i} className={b('column')}>
            <div
              className={b('bar', [isUp(v) ? '' : 'down'])}
              style={{height: `${barHeight(v)}%`, bottom: `${barDistance(v)}%`}} />
            <div
              className={b('line', [isUp(v) ? '' : 'down'])}
              style={{height: `${lineHeight(v)}%`, bottom: `${lineDistance(v)}%`}} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
})
