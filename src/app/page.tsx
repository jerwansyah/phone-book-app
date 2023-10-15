'use client'
/** @jsxImportSource @emotion/react */

// import Link from 'next/link'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Header from './components/header'
import ContactListItem from './components/contactListItem'
import { mq } from './styles/mediaQueries'

const ContactList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',

  [mq[0]]: {
    gap: '24px'
  }
})

const DummyContactList = [
  {
    firstName: 'Johnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
    lastName: 'Doe',
    phones: ['12354', '12354', '100000000000000000000000000002354']
  },
  {
    firstName: 'n',
    lastName: 'Doe',
    phones: ['123']
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    phones: ['123']
  }
]

export default function ContactListPage() {
  return (
    <>
      <Header />
      <main className='container'>
        {/* <main css={mainStyle}> */}
        <ContactList>
          <h4>Favorite(s)</h4>
          {
            DummyContactList.map((contact, index) => (
              <ContactListItem
                key={index}
                firstName={contact.firstName}
                lastName={contact.lastName}
                phones={contact.phones}
              />
            ))
          }
          <hr />
          {
            DummyContactList.map((contact, index) => (
              <ContactListItem
                key={index}
                firstName={contact.firstName}
                lastName={contact.lastName}
                phones={contact.phones}
              />
            ))
          }
        </ContactList>
      </main>
    </>
  )
}
