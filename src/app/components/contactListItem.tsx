'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import styled from '@emotion/styled'
import { mq } from '../styles/mediaQueries'
import ContactIcon from './contactIcon'

interface ContactListItemProps {
  firstName: string;
  lastName: string;
  phones: Array<number>;
}

const Item = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',

  [mq[0]]: {
    gap: '24px'
  }
})

const ProfileDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1,
  overflow: 'hidden',
  alignItems: 'center',
  width: '100%',

  [mq[0]]: {
    // width: 'calc(100% - 80px - 24px)',
    flexDirection: 'row',
    gap: '24px'
  },

  'h4, div, div > span': {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '.text-body-3': {
      fontSize: '18px',
      lineHseight: '28px'
    }
  },

  'h4, div': {
    [mq[0]]: {
      width: 'calc(50% - 12px)'
    }
  }
})

const ContactListItem: FC<ContactListItemProps> = (props) => {
  return (
    <>
      <Item>
        <ContactIcon />
        <ProfileDetails>
          <h4>{props.firstName} {props.lastName}</h4>

          <div>
            {
              props.phones.slice(0, 2).map((number, i) => [
                i > 0 && ', ',
                <span
                  className='text-body-2'
                  key={i}
                >
                  {number}
                </span>
              ])
            }
            {props.phones.length > 2 && ', + more'}
          </div>
        </ProfileDetails>
      </Item>
    </>
  )
}

export default ContactListItem
