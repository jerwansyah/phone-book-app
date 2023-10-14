'use client'
/** @jsxImportSource @emotion/react */

import Link from 'next/link'
import ArrowLeft from './../svg/arrow-left.svg'

export default function ContactDetailsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Link href="/">
        <ArrowLeft />
      </Link>

      {children}
    </>
  )
}
