'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import Plus from './../svg/plus.svg'
import Search from './../svg/search.svg'
import Edit2 from './../svg/edit-2.svg'
import ArrowLeft from './../svg/arrow-left.svg'
import { shadow4px } from '../styles/shadows'
import { mq } from '../styles/mediaQueries'
import { actionIcon, responsiveIcon } from '../styles/icon'

interface HeaderProps {
  onSearch: () => void,
  controlSearch: () => void,
  isSearching: boolean
}

const headerStyle = css({
  padding: '20px 24px',
  alignItems: 'center',
  height: '64px',

  [mq[0]]: {
    height: '76px'
  }
})

const ActionsRight = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  '& > a': {
    lineHeight: '0'
  },
  [mq[0]]: {
    gap: '16px'
  }
})

const iconSizes = ['24px', '32px']

const Header: FC<HeaderProps> = (props) => {
  const handleSearch = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props.controlSearch(!props.isSearching)
  }

  const handleBulkEdit = () => {
    console.log('bulk edit - not yet implemented')
  }

  return (
    <>
      <div
        css={[shadow4px, css({ position : 'sticky', top: '0', width: '100%' })]}
      >
        <header
          className='container'
          css={headerStyle}
        >
          {
            !props.isSearching &&
            <>
              <h3>Contact List</h3>
              <ActionsRight>
                <Link href="/add-contact">
                  <Plus
                    css={[responsiveIcon(iconSizes), actionIcon]}
                  />
                </Link>
                <Search
                  onClick={handleSearch}
                  css={[responsiveIcon(iconSizes), actionIcon]}
                />
                <Edit2
                  css={[responsiveIcon(iconSizes), actionIcon]}
                  onClick={handleBulkEdit}
                />
              </ActionsRight>
            </>
          }

          {/* searching */}
          {
            props.isSearching &&
            <>
              <ArrowLeft
                css={
                  [responsiveIcon(iconSizes), actionIcon, {
                    marginRight: '10px',
                    [mq[0]]: {
                      marginRight: '12px'
                    }
                  }]
                }
                onClick={handleSearch}
              />
              <input
                type="search"
                placeholder="Search"
                className='form-input'
                css={
                  css`
                    width: 100%;
                    padding-left: 0;
                    padding-right: 0;
                    `
                }
                onChange={props.onSearch}
              />
            </>
          }
        </header>
      </div>
    </>
  )
}

export default Header
