'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
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
