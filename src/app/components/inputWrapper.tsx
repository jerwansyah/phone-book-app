'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'
import { mq } from '../styles/mediaQueries'

interface InputWrapperProps {
  for: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  message?: string;
  children?: React.ReactNode;
}

const InputWrapper: FC<InputWrapperProps> = (props) => {
  return (
    <>
    <div className="" css={{
      width: '100%',
        '&:focus-within label': {
          color: 'rgb(var(--primary-blue-medium))'
        }
      }}>
      <label htmlFor={props.for} className='text-field-2'>
        {props.label}
        {props.required && <span css={{color: 'rgb(var(--danger-red-medium))'}}>*</span>}
      </label>

      <div className="slot">
        {props.children}
      </div>

      {props.error && props.message &&
      <>
        <span className='text-field-2'>{props.message || 'Required'}</span>
      </>}
    </div>
       
    </>
  )
}

export default InputWrapper
