'use client'
/** @jsxImportSource @emotion/react */

import React, { FC, useState } from 'react'

import styled from '@emotion/styled'
import { mq } from '../styles/mediaQueries'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ContactIcon from './contactIcon'
import { ContactListItemActions } from './contactListItemActions'
import { useMutation } from '@apollo/client'
import { DELETE_CONTACT_BY_ID } from '../lib/deleteContactById'

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
  },

  position: 'relative',
  '&:hover > div.actions': {
    display: 'block'
  }
})

const ActionsContainer = styled.div({
  display: 'none',
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)'
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
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  // const [isHolding, setHolding] = useState(false)

  // let holdTimeout

  // const handleTouchStart = () => {
  //   holdTimeout = setTimeout(() => {
  //     setHolding(true)
  //   }, 1000)
  // };

  // const handleTouchEnd = () => {
  //   clearTimeout(holdTimeout)

  //   if (isHolding) {
  //     setHolding(false);
  //   }
  // }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleEdit = () => {
    router.push(`/${props.contactId}?edit=true`)
    // TODO: change it!!!, edit is not queried?!??!?!
  }

  const [deleteContact, { loading, error, data }] = useMutation(DELETE_CONTACT_BY_ID, {
    variables: { id: props.contactId }
  })

  const handleDelete = async () => {
    try {
      const result = await deleteContact({ variables: { id: props.contactId } })
        if (result?.data?.delete_contact_by_pk) {
          router.push('/?deleted=true')
          // TODO: change it!!!
        }
    } catch (e) {
      console.error(`Error deleting contact: ${e}`)
    }
  }

  const handleFavorite = () => {
    console.log('favorite')
  }

  return (
    <div>
      <Link href={`/${props.contactId}`}>
        <Item
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // onTouchStart={handleTouchStart}
          // onTouchEnd={handleTouchEnd}
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
          {/* { isHovered || isHolding && */}
          {/* { isHovered && */}
          <ActionsContainer className='actions'>
            <ContactListItemActions
              edit={handleEdit}
              delete={handleDelete}
              favorite={handleFavorite}
            />
          </ActionsContainer>
          {/* } */}
        </Item>
      </Link>
    </div>
  )
}

export default ContactListItem
