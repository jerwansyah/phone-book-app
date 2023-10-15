import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

import Client from './client'
import GlobalStyles from './registry'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phonebook App',
  description: 'A Phonebook App'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Client>
        <GlobalStyles />
        <html lang="en">
          <body
            suppressHydrationWarning
            // className={inter.className}
          >
            {children}
          </body>
        </html>
      </Client>
    </>
  )
}
