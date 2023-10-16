'use client'
/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

import HeaderContactList from './components/headerContactList'
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

const limit = 10

export default function ContactListPage() {
  const [offset, setOffset] = useState(0)

  // TODO: limit next page if no more result
  const goToNextPage = () => {
    setOffset(offset + limit)
  }

  const goToPrevPage = () => {
    if (offset - limit < 0) {
      setOffset(0)
      return
    }
    setOffset(offset - limit)
  }

  function ContactList() {
    const handlePageChange = () => {
      fetchMore({
        variables: {
          offset: offset,
          limit: limit
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if ([...fetchMoreResult.contact].length === 0) {
            // TODO: limit next page if no more result
            setOffset(offset - limit)
            return {}
          }
          return { contact: [...fetchMoreResult.contact] }
        }
      })
    }

    const { loading, error, data, fetchMore } = useQuery(GET_CONTACT_LIST, {
      variables: {
        offset: offset,
        limit: limit
      }
    })

    // TODO: add spinner
    if (error) return `Error! ${error}`
    if (loading || !data) return <p>Loading ...</p>

    // TODO: separate list of favorite contacts
    // TODO: save in local storage
    // TODO: pagination number
    return (
      <>
        {
          (data && data.contact) &&
          data.contact.map((item: any) => (
            <Link
              href={`/${item.id}`}
              key={item.id}
            >
              <ContactListItem
                firstName={item.first_name}
                lastName={item.last_name}
                phones={item.phones.map(
                  (phone: { number: string | number }) => phone.number)}
              />
            </Link>
          ))
        }
        {
          !(data.contact.length) &&
          <p>No more contacts.</p>
        }
      </>
    )
  }

  return (
    <>
      <HeaderContactList />
      <main
        className='container'
        css={css`${paginationPaddingOffset}`}
      >
        <ContactListContainer>
          <h4>Favorite(s)</h4>
          {/* TODO: local storage, filter pagination with where */}
          <hr />
          <ContactList />
        </ContactListContainer>
      </main>
      <Pagination
        currentPage={0}
        next={goToNextPage}
        prev={goToPrevPage}
      />
    </>
  )
}
