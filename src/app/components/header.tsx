'use client'
/** @jsxImportSource @emotion/react */

import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
// import Link from 'next/link'

// import Plus from './../svg/plus.svg'
// import Search from './../svg/search.svg'
// import Edit2 from './../svg/edit-2.svg'
// import ArrowLeft from './../svg/arrow-left.svg'
import { shadow4px } from '../styles/shadows'
import { mq } from '../styles/mediaQueries'
// import { actionIcon, responsiveIcon } from '../styles/icon'

const headerStyle = css({
  padding: '20px 24px',
  alignItems: 'center',
  height: '64px',

  [mq[0]]: {
    height: '76px'
  }
})

const Actions = styled.div(props => ({
  marginLeft: props.isRight && 'auto',
  marginRight: props.isLeft && '10px',
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  '& > a': {
    lineHeight: '0'
  },
  [mq[0]]: {
    gap: '16px',
    marginRight: props.isLeft && '12px'
  }

  // svg: {
  //   actionIcon,
  //   responsiveIcon(iconSizes)
  // }
}))

// const iconSizes = ['24px', '32px']

const Header = (props) => {
  return (
    <>
      <div
        css={[shadow4px, css({ position : 'sticky', top: '0', width: '100%' })]}
      >
        <header
          className='container'
          css={headerStyle}
        >
          <Actions
            isLeft
            className='left'
            css={css`${props.textCenter ? 'margin-right: auto !important;' : ''}`}
          >
            {props.left}
          </Actions>
          <h3>{props.title}</h3>
          <Actions
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
