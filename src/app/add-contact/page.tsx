'use client'
/** @jsxImportSource @emotion/react */

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { css } from '@emotion/react'
import { gql, useMutation } from '@apollo/client'

import Header from './../components/header'
import Check from './../svg/check.svg'
import Close from './../svg/close.svg'
import { actionIcon, responsiveIcon } from '../styles/icon'
import { mq } from '../styles/mediaQueries'
import ContactDetail from '../components/contactDetail'
import ProfileIcon from './../svg/profile-icon.svg'

const iconSizes = ['24px', '32px']

const ADD_CONTACT_WITH_PHONES = gql`
mutation AddContactWithPhones(
  $first_name: String!,
  $last_name: String!,
  $phones: [phone_insert_input!]!
  ) {
  insert_contact(
    objects: {
        first_name: $first_name,
        last_name:
        $last_name, phones: {
            data: $phones
          }
      }
  ) {
  returning {
    first_name
    last_name
    id
    phones {
      number
    }
  }
}
}
`

export default function AddContactPage() {
  const router = useRouter()
  const [contactData, setContactData] = useState({
      first_name: '',
      last_name: '',
      phones: [{ number: '' }]
  })

  const [addContact, { loading, error, data }] = useMutation(ADD_CONTACT_WITH_PHONES)

  const handleAddContact = async () => {
    try {
      const result = await addContact({ variables: contactData })
      if (result?.data?.insert_contact?.returning[0]?.id) {
        router.push(`/${result.data.insert_contact.returning[0].id}`)
      }
    } catch (e) {
      console.error(`Error adding contact: ${e}`)
    }
  }

  return (
    <>
      <Header
        title="Add Contact"
        textCenter
        left={
          <Link href="/">
            <Close
              css={[
                responsiveIcon(iconSizes),
                actionIcon,
                css({
                  path: {
                    stroke: 'rgb(var(--danger-red-medium))'
                  }
                })
              ]}
            />
          </Link>
        }
        right={
          <>
            <Check
              css={[
                responsiveIcon(iconSizes),
                actionIcon,
                css({
                  path: {
                    stroke: 'rgb(var(--success-green-medium))'
                  }
                })
              ]}
              onClick={handleAddContact}
            />
          </>
        }

      />
      <main
        className='container'
        css={
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            // margin: '0 auto',
          }
        }
      >
        {/* TODO: add spinner, alert */}
        {error && <p>{`Error! ${error}`}</p>}
        {/* {loading || !data && <p>Loading ...</p>} */}
        <div
          css={
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              width: '100%',
              // margin: '0 auto',

              [mq[0]]: {
                alignItems: 'flex-start',
                flexDirection: 'row',
                // gap: '24px'
              }
            }
          }
        >
          <ProfileIcon css={responsiveIcon(['80px', '184px'])} />
          <ContactDetail
            isEditing={true}
            contactData={contactData}
            setContactData={setContactData}
            css={css`: center;`}
          />
        </div>
      </main>
    </>
  )
}
