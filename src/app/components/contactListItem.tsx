'use client'
/** @jsxImportSource @emotion/react */

import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import { mq } from '../styles/mediaQueries'
import ContactIcon from './contactIcon'
import { ContactListItemActions } from './contactListItemActions'
import Link from 'next/link'

interface ContactListItemProps {
  contactId: string;
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
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleDelete = () => {
    console.log('delete', props.contactId)
  }

  return (
    <>
      <Link href={`/${props.contactId}`}>
        <Item
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
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
      </Link>
      {/* { isHovered && */}
        <ContactListItemActions
          css={{
            // position: 'absolute',
            marginLeft: 'auto',
            // right: '0',
            // top: '0',
            // height: '100%',
            // width: '80px',
          }}
          edit={handleDelete}
          delete={() => console.log('delete')}
          favorite={() => console.log('favorite')}
        />
      {/* } */}
    </>
  )
}

export default ContactListItem
