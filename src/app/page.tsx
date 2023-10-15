'use client'
/** @jsxImportSource @emotion/react */

// import Link from 'next/link'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { gql, useQuery } from '@apollo/client'

import Header from './components/header'
import ContactListItem from './components/contactListItem'
import { mq } from './styles/mediaQueries'
import Pagination, { paginationPaddingOffset } from './components/pagination'


const GET_CONTACT_LIST = gql`
query GetContactList (
  $distinct_on: [contact_select_column!],
  $limit: Int,
  $offset: Int,
  $order_by: [contact_order_by!],
  $where: contact_bool_exp
) {
  contact(
      distinct_on: $distinct_on,
      limit: $limit,
      offset: $offset,
      order_by: $order_by,
      where: $where
  ) {
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`

const ContactListContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',

  [mq[0]]: {
    gap: '24px'
  }
})

export default function ContactListPage() {
  function ContactList() {
    const {loading, error, data} = useQuery(GET_CONTACT_LIST)
    // TODO: add spinner
    if (loading) return <p>Loading ...</p>
    if (error) return `Error! ${error}`

    // TODO: separate list of favorite contacts
    // TODO: save in local storage
    // TODO: pagination
    return (
      <>
        {
          data.contact.map((item, i) => (
            <ContactListItem
              key={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
              phones={item.phones.map(phone => phone.number)}
            />
          ))
        }
      </>
    )
  }

  return (
    <>
      <Header />
      <main
        className='container'
        css={css`${paginationPaddingOffset}`}
      >
        <ContactListContainer>
          <h4>Favorite(s)</h4>
          <hr />
          <ContactList />
        </ContactListContainer>
      </main>
      <Pagination />
    </>
  )
}
