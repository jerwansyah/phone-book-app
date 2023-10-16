'use client'
/** @jsxImportSource @emotion/react */

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

const queryHelper = (query: string) => {
  return {
    "_or": [
      { "first_name": { "_like": `%${query}%` } },
      { "last_name": { "_like": `%${query}%` } },
      { "phones": { "number": { "_like": `%${query}%` } } }
    ]
  }
}

const headerOffset = css({
  marginTop: '64px',

  [mq[0]]: {
    marginTop: '76px'
  }
})

export default function ContactListPage() {
  const [offset, setOffset] = useState(0)
  const [query, setQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: any) => {
    setOffset(0)
    setQuery(e.target.value)
  }

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
          limit: limit,
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
        limit: limit,
        where: queryHelper(query),
        order_by: [
          { "first_name": "asc" },
          { "last_name": "asc" }
        ]
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
            // <Link
            //   href={`/${item.id}`}
            //   key={item.id}
            // >
            <ContactListItem
              key={item.id}
              contactId={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
              phones={item.phones.map(
                (phone: { number: string | number }) => phone.number)}
            />
            // </Link>
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
      <HeaderContactList
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSearch={handleSearch}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        controlSearch={setIsSearching}
        isSearching={isSearching}/>
      <main
        className='container'
        css={css`
          ${paginationPaddingOffset}
          ${headerOffset}
        `}
      >
        <ContactListContainer>
          {!isSearching &&
            <>
              <h4>Favorite(s)</h4>
              <p className='text-body-3'>No favorite(s).</p>
              <hr />
            </>
          }
          {/* TODO: local storage, filter pagination with where */}
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
