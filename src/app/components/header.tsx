'use client'
/** @jsxImportSource @emotion/react */

import React, { FC, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import Plus from './../svg/plus.svg'
import Search from './../svg/search.svg'
import Edit2 from './../svg/edit-2.svg'
import { shadow4px } from '../styles/shadows'
import { mq } from '../styles/mediaQueries'
import { actionIcon, responsiveIcon } from '../styles/icon'

interface Header {

}

const headerStyle = css({
  display: 'flex',
  width: '100%',
  position : 'sticky',
  top: '0',
  padding: '20px 24px',
  alignItems: 'center'
})

const ActionsRight = styled.div({
  marginLeft: 'auto',
  display: 'grid',
  gap: '12px',
  alignItems: 'center',
  '& > a': {
    lineHeight: '0'
  },
  [mq[0]]: {
    gap: '16px'
  }
}, props => ({ gridTemplateColumns: `repeat(${props.nCol}, 1fr)` }))

const iconSizes = ['24px', '32px']

// user events

const handleAddContact = () => {
  console.log('add contact')
}

const handlesearch = () => {
  console.log('search')
}

const handleBulkEdit = () => {
  console.log('bulk edit')
}

const Header: FC<Header> = () => {
  const [isSearching, setIsSearching] = useState(false)

  return (
    <header css={[shadow4px, headerStyle]}>
      <h3>Contact List</h3>
      <ActionsRight nCol="3">
        <Link href="/contact-details">
          <Plus
            css={[responsiveIcon(iconSizes), actionIcon]}
            onClick={handleAddContact}
          />
        </Link>
        <Search
          onClick={handlesearch}
          css={[responsiveIcon(iconSizes), actionIcon]}
        />
        <Edit2
          css={[responsiveIcon(iconSizes), actionIcon]}
          onClick={handleBulkEdit}
        />
      </ActionsRight>

      {/* searching */}
      {isSearching && <input
        type="text"
        placeholder="Search"
      />}

    </header>
  )
}

export default Header
