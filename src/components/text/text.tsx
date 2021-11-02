import React, { Props, ForwardedRef } from 'react'
import { BEM, modList, extendClassName } from 'ui'
import styles from './text.module.scss'

interface TextProps<W extends keyof JSX.IntrinsicElements> {
  wrapper?: W
  block?: boolean
  type?: 'h1' | 'h2' | 'h3' | 'h4'
}

const b = BEM('text', styles)

export const UiText = React.forwardRef(function<W extends keyof JSX.IntrinsicElements = 'div'>(
  props: TextProps<W> & Omit<JSX.IntrinsicElements[W], 'style'> & Props<any>,
  ref: ForwardedRef<JSX.IntrinsicElements[W]>,
) {
  let {wrapper, type, block, children} = props
  const cleanProps = {...props, type: undefined, block: undefined, wrapper: undefined}

  const Wrapper: any = wrapper || type || (block ? 'div' : 'span')

  return (
    <Wrapper ref={ref} {...cleanProps} className={extendClassName(props, b([type]))}>
      {children}
    </Wrapper>
  )
})
