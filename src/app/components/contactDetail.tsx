'use client'
/** @jsxImportSource @emotion/react */

import React, { FC, useState } from 'react'
import { mq } from '../styles/mediaQueries'
import InputWrapper from './inputWrapper'

interface ContactDetailProps {
  isEditing?: boolean;
  contactData: { [key: string]: any };
  setContactData: void;
}

const ContactDetail: FC<ContactDetailProps> = (props) => {
  const [firstName, setFirstName] = useState(props.contactData.first_name)
  const [lastName, setLastName] = useState(props.contactData.last_name)
  const [phones, setPhones] = useState(props.contactData.phones)

  const [totalPhone, setTotalPhone] = useState(phones.length)

  // TODO: add validator for phone

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
    props.setContactData({
      ...props.contactData,
      first_name: e.target.value
    })
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
    props.setContactData({
      ...props.contactData,
      last_name: e.target.value
    })
  }

  const handlePhoneChange = (index, e) => {
    const updatedPhones = [...phones]
    updatedPhones[index] = {
      number: e.target.value
    }

    setPhones(updatedPhones)
    props.setContactData({
      ...props.contactData,
      phones: updatedPhones
    })
  }

  const addNumberInput = () => {
    setTotalPhone(totalPhone + 1)
    setPhones([...phones, { number: '' }])
  }

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
            value={firstName}
            onChange={(e) => handleFirstNameChange(e)}
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
            value={lastName}
            onChange={handleLastNameChange}
            disabled={!props.isEditing}
            />
        </InputWrapper>
        {phones?.map((phone, i) => [
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
              onChange={(e) => handlePhoneChange(i, e)}
              disabled={!props.isEditing}
              value={phone.number}
            />
          </InputWrapper>
        ])}
        {props.isEditing &&
          <button
            className="btn-tertiary"
            onClick={addNumberInput}
          >
            Add Number +
          </button>
        }
      </div>
    </>
  )
}

export default ContactDetail
