'use client'
/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import Header from './components/header'

export default function ContactList() {
  return (
    <>
      <Header />
      <main>
        <Link href="/contact-details">contact</Link>
        <h1 style={{ color: 'rgb(var(--primary-blue-medium))' }}>
          Hello, world!
        </h1>
      </main>
    </>
  )
}
