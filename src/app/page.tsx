'use client'
/** @jsxImportSource @emotion/react */

// import Link from 'next/link'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Header from './components/header'
import ContactListItem from './components/contactListItem'

const mainStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  padding: '16px 24px',
  alignItems: 'center'
})

const ContactList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%'
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
      <main css={mainStyle}>
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
