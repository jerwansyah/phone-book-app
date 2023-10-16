'use client'
/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import { css } from '@emotion/react'
import { gql, useQuery } from '@apollo/client'

import ArrowLeft from './../svg/arrow-left.svg'
import Edit1 from './../svg/edit-1.svg'
import Heart from './../svg/heart.svg'
// import HeartFilled from './../svg/heart-filled.svg'
import Trash from './../svg/trash.svg'
// import Check from './../svg/check.svg'
// import Close from './../svg/close.svg'

import Header from './../components/header'
import { actionIcon, responsiveIcon } from '../styles/icon'
import { mq } from '../styles/mediaQueries'
import ProfileIcon from './../svg/profile-icon.svg'
import ContactDetail from '../components/contactDetail'

const iconSizes = ['24px', '32px']

const GET_CONTACT_DETAIL = gql`
query GetContactDetail($id: Int!) {
  contact_by_pk(id: $id) {
  last_name
  id
  first_name
  created_at
  phones {
    number
  }
}
}`

export default function ContactDetailPage({
  params
}: { params: { id: string } }) {
  function GetContactDetail() {
    const { loading, error, data } = useQuery(GET_CONTACT_DETAIL, {
      variables: { id: params.id }
    })

    // TODO: add spinner
    if (error) return `Error! ${error}`
    if (loading || !data) return <p>Loading ...</p>

    return (
      <>
        <ProfileIcon css={responsiveIcon(['80px', '184px'])} />
        <ContactDetail contactData={data.contact_by_pk} />
      </>
    )
  }

  return (
    <>
      <Header
        title="Contact Detail"
        left={
          <Link href="/">
            <ArrowLeft
              css={[responsiveIcon(iconSizes), actionIcon]}
            />
          </Link>
        }
        right={
          <>
            <Edit1
              css={[responsiveIcon(iconSizes), actionIcon]}
              onClick={() => console.log('edit')}
            />
            <Heart
              css={[responsiveIcon(iconSizes), actionIcon]}
            />
            <Trash
              css={
                [
                  responsiveIcon(iconSizes),
                  actionIcon,
                  css({
                    path: {
                      stroke: 'rgb(var(--danger-red-medium))'
                    }
                  })
                ]
              }
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

            [mq[0]]: {
              alignItems: 'flex-start',
              flexDirection: 'row'
            }
          }
        }
      >
        <GetContactDetail />
      </main>
    </>
  )
}
