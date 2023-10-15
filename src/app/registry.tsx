'use client'

import { Global } from '@emotion/react'
import { global } from './styles/globals'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function GlobalStyles() {
  console.log(inter.style.fontFamily)
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Global styles={global} />
    </>
  )
}
