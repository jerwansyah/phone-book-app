'use client'

import { Global } from '@emotion/react'
import { global } from './styles/globals'
import React from 'react'

export default function GlobalStyles() {
  return (
    <>
      <Global styles={global} />
    </>
  )
}
