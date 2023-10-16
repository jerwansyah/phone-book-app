'use client'
/** @jsxImportSource @emotion/react */

import React, { FC, useState } from 'react'
import { mq } from '../styles/mediaQueries'
import InputWrapper from './inputWrapper'
import Plus from './../svg/plus.svg'
import Minus from './../svg/minus.svg'
import { actionIcon } from '../styles/icon'

interface ContactDetailProps {
  isEditing?: boolean;
  contactData: { [key: string]: any };
  setContactData?: () => void;
}

const ContactDetail: FC<ContactDetailProps> = (props) => {
  const [firstName, setFirstName] = useState(props.contactData.first_name)
  const [lastName, setLastName] = useState(props.contactData.last_name)
  const [phones, setPhones] = useState(props.contactData.phones)

  const [totalPhone, setTotalPhone] = useState(phones.length)
  // TODO: add validator for phone

  const addNumberInput = () => {
    setTotalPhone((prevTotalPhone: number) => prevTotalPhone + 1)
    setPhones((prevPhones: any) => [...prevPhones, { number: '' }])
  }

  const removeNumberInput = (e: { target: { getAttribute: (arg0: string) => any } }) => {
    const index = e.target.getAttribute('data-index')
    if (totalPhone > 1) {
      const updatedPhones = [...phones]
      updatedPhones.splice(index, 1)
      setPhones(updatedPhones)
      setTotalPhone(totalPhone - 1)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      props.setContactData({
        ...props.contactData,
        phones: updatedPhones
      })
    }
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props.setContactData({
      ...props.contactData,
      first_name: e.target.value
    })
  }

  const handleLastNameChange = (e: { target: { value: any } }) => {
    setLastName(e.target.value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props.setContactData({
      ...props.contactData,
      last_name: e.target.value
    })
  }

  const handlePhoneChange = (index: number | number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPhones = [...phones]
    updatedPhones[index] = {
      number: e.target.value
    }

    setPhones(updatedPhones)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    props.setContactData({
      ...props.contactData,
      phones: updatedPhones
    })
  }

  return (
    <>
      <div
        css={
          {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
        {phones?.map((phone: any, i: number) => [
          <InputWrapper
            label={`Number ${i + 1}`}
            for={`number${i}`}
            disabled={!props.isEditing}
            required
            suffix={
              totalPhone > 1 && props.isEditing &&
              <Minus
                css={actionIcon}
                onClick={removeNumberInput}
                data-index={i}
              />
            }
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
            className="btn btn-tertiary btn-small"
            onClick={addNumberInput}
          >
            <Plus
              css={{
                width: '16px',
                height: '16px',
                path: {
                  stroke: 'rgb(var(--primary-blue-medium))'
                },
                marginRight: '8px'
              }}
            />
            Add New Number
          </button>
        }
      </div>
    </>
  )
}

export default ContactDetail
