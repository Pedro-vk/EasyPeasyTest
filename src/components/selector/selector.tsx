import React, { Props, ForwardedRef } from 'react'
import { BEM, modList, extendClassName, UiText } from 'ui'
import styles from './selector.module.scss'

interface SelectorProps {
  title: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
}

const b = BEM('selector', styles)

export const UiSelector = function(
  props: SelectorProps & Props<any>
) {
  const {options, value, onChange, title} = props

  return (
    <>
    <div className={b()}>
      <UiText type="h3" className={b('heading')}>{title}</UiText>
      {options.map(option => (
        <div
          key={option}
          className={b('option', {selected: value === option})}>

          {option}
        </div>
      ))}
    </div>
    </>
  )
}
