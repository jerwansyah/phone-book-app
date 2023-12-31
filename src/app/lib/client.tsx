'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          read(existing, {
            args: {
              // Default to returning the entire cached list,
              // if offset and limit are not provided.
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              offset = existing?.offset || 0,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              limit = existing?.length || 10
            } = {}
          }) {
            return existing && existing.slice(offset, offset + limit)
          }
          // ... keyArgs, merge ...
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: cache
})

export default function Client({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    client.resetStore()
  }, [pathname, searchParams])

  return (
    <>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </>
  )
}
