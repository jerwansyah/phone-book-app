'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'
import { mq } from '../styles/mediaQueries'
import InputWrapper from './inputWrapper'

interface ContactDetailProps {
  contactData: JSON;
}

const ContactDetail: FC<ContactDetailProps> = () => {
  return (
    <>
      <div
        css={
          {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            [mq[0]]: { maxWidth: '450px'}
          }
        }
      >
        <InputWrapper
          label="First Name"
          for="firstName"
          required
        >
          <input
            type='text'
            placeholder='First Name'
            className='form-input slot'
          />
        </InputWrapper>
        <InputWrapper
          label="Last Name"
          for="lastName"
          required
          // disabled?????
        >
          <input
            type='text'
            placeholder='Last Name'
            className='form-input slot'
            disabled={true}
          />
        </InputWrapper>
        <InputWrapper
          label="Number 1"
          for="number"
          required
          // suffix={<></>}
          >
          <input
            type='text'
            placeholder='Phone Number'
            className='form-input slot'
            onChange={() => {console.log('dasdsa')}}
          />
        </InputWrapper>
        {/* <button>Add Number +</button> */}
      </div>
    </>
  )
}

export default ContactDetail
