'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'

import ArrowLeft from './../svg/arrow-left.svg'
import ArrowRight from './../svg/arrow-right.svg'
import { shadowNegative4px } from '../styles/shadows'
import { mq } from '../styles/mediaQueries'

interface PaginationProps {
  currentPage?: number,
  // maxPage?: number,
  next: () => void,
  prev: () => void,
}

const paginationContainer = css({
  paddingTop: '16px',
  paddingBottom: '16px',
  justifyContent: 'center',

  button: {
    height: '32px',
    border: 'none',
    backgroundColor: 'rgb(var(--neutral-white))',

    ':hover': {
      cursor: 'pointer'
    }
  }
})

const svgStyle = css({
  width: '16px',
  height: '16px',
  margin: '8px',
  path: {
    stroke: 'rgb(var(--neutral-black))'
  }
})

const buttonStyle = css({
  color: 'rgb(var(--neutral-white))',
  display: 'flex',
  width: '32px',
  height: '32px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  background: 'var(--primary-blue-medium, #0671E0)'
})

export const paginationPaddingOffset = css({
  paddingBottom: '80px',

  [mq[0]]: {
    paddingBottom: '88px'
  }
})

const Pagination: FC<PaginationProps> = (props) => {
  return (
    <>
      <div
        css={
          [
            shadowNegative4px,
            css({
              position : 'fixed',
              bottom: '0',
              width: '100%',
              height: '64px'
            })
          ]
        }
      >
        <div
          className="container"
          css={paginationContainer}
        >
          <button
            css={css`margin-right: 12px;`}
            onClick={props.prev}
          >
            <ArrowLeft css={svgStyle} />
          </button>
          <button css={buttonStyle}>{props.currentPage}</button>
          <button
            css={css`margin-left: 12px;`}
            onClick={props.next}
          >
            <ArrowRight css={svgStyle} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination
