'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          read(existing, {
            args: {
              // Default to returning the entire cached list,
              // if offset and limit are not provided.
              offset = 0,
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
  return (
    <>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </>
  )
}
