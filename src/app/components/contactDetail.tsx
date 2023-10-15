'use client'
/** @jsxImportSource @emotion/react */

import React, { FC, useRef } from 'react'
import { css } from '@emotion/react'
import { mq } from '../styles/mediaQueries'
import InputWrapper from './inputWrapper'

interface ContactDetailProps {
  contactData: { [key: string]: any };
  isEditing: boolean;
}

const ContactDetail: FC<ContactDetailProps> = (props) => {
  // const [isEditing, setIsEditing] = useState(false)

  const firstName = useRef(props.contactData.first_name)
  const lastName = useRef(props.contactData.last_name)
  const phones = useRef(props.contactData.phones.map(phone => phone.number))

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
          disabled={!props.isEditing}
          required
        >
          <input
            type='text'
            placeholder='First Name'
            className='form-input slot'
            value={firstName.current}
            disabled={!props.isEditing}
            />
        </InputWrapper>
        <InputWrapper
          label="Last Name"
          for="lastName"
          required
          disabled={!props.isEditing}
        >
          <input
            type='text'
            placeholder='Last Name'
            className='form-input slot'
            value={lastName.current}
            disabled={!props.isEditing}
            />
        </InputWrapper>
        {phones.current.map((number, i) => [
          <InputWrapper
            label={`Number ${i + 1}`}
            for="number"
            disabled={!props.isEditing}
            required
            // suffix={<></>}
            key={i}
            >
            <input
              type='text'
              placeholder='Phone Number'
              className='form-input slot'
              onChange={() => {console.log('dasdsa')}}
              disabled={!props.isEditing}
              value={number}
            />
          </InputWrapper>
        ])}
        {props.isEditing && <button>Add Number +</button>}
      </div>
    </>
  )
}

export default ContactDetail
