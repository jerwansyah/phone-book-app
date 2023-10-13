"use client"
/** @jsxImportSource @emotion/react */

import { Global, css } from '@emotion/react'
import { global } from './globals'

export default function Home() {
  return (
    <>
      <Global styles={global} />
      <main>
        <h1 style={{ color: 'rgb(var(--primary-blue-medium))' }}>Hello, world!</h1>
      </main>
    </>
  )
}
