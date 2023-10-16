'use client'
/** @jsxImportSource @emotion/react */

import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { shadow4px } from '../styles/shadows'
import { mq } from '../styles/mediaQueries'

const headerStyle = css({
  padding: '20px 24px',
  alignItems: 'center',
  height: '64px',

  [mq[0]]: {
    height: '76px'
  }
})

const Actions = styled.div(props => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  marginLeft: props.isRight && 'auto',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  marginRight: props.isLeft && '10px',
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  '& > a': {
    lineHeight: '0'
  },
  [mq[0]]: {
    gap: '16px',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    marginRight: props.isLeft && '12px'
  }

  // svg: {
  //   actionIcon,
  //   responsiveIcon(iconSizes)
  // }
}))

const Header = (props: any) => {
  return (
    <>
      <div
        css={
          [
            shadow4px,
            css({ position : 'fixed', top: '0', width: '100%', zIndex: '99' })
          ]
        }
      >
        <header
          className='container'
          css={headerStyle}
        >
          <Actions
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            isLeft
            className='left'
            css={css`${props.textCenter ? 'margin-right: auto !important;' : ''}`}
          >
            {props.left}
          </Actions>
          <h3>{props.title}</h3>
          <Actions
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            isRight
            className='right'
          >
            {props.right}
          </Actions>
        </header>
      </div>
    </>
  )
}

export default Header
