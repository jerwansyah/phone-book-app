'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'
// import styled from '@emotion/styled'
// import Link from 'next/link'

import ArrowLeft from './../svg/arrow-left.svg'
import ArrowRight from './../svg/arrow-right.svg'
import { shadowNegative4px } from './../styles/shadows'
import { mq } from './../styles/mediaQueries'

interface PaginationProps {

}

const paginationContainer = css({
  paddingTop: '16px',
  paddingBottom: '16px',
  justifyContent: 'center',

  button: {
    height: '32px',
    border: 'none',
    backgroundColor: 'rgb(var(--neutral-white))'
  }
})

export const paginationPaddingOffset = css({
  paddingBottom: '80px',

  [mq[0]]: {
    paddingBottom: '88px'
  }
})

const Pagination: FC<PaginationProps> = () => {
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
          <button css={css`margin-right: 12px;`}>
            <ArrowLeft
              css={css`margin: 8px;`}
              width='16px'
              height='16px'
            />
          </button>

          {/* <Pages>

          </Pages> */}

          <button css={css`margin-left: 12px;`}>
            <ArrowRight
              css={css`margin: 8px;`}
              width='16px'
              height='16px'
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Pagination
