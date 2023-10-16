'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'

interface InputWrapperProps {
  for: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  message?: string;
  children?: React.ReactNode;
  suffix?: React.ReactNode;
}

const iconright = css({
  display: 'block',
  position: 'relative',
  zIndex: 1,
  marginTop: '-42px',
  // padding: '0px 20px 12px 12px',
  paddingBottom: '12px',
  width: '100%',
  marginLeft: 'calc(100% - 40px)',

  svg : {
    path: {
      stroke: 'rgb(var(--primary-blue-medium))'
    }
  }
})

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
          {!props.disabled && props.required && <span css={{color: 'rgb(var(--danger-red-medium))'}}>*</span>}
        </label>

        {/* {props.suffix && <div css={iconright}>
          {props.suffix}
        </div>} */}

        <div
          className='slot'
          css={css`${props.suffix ? 'input { padding-right: 56px; }' : ''}`}
        >
          {props.children}
        </div>

        {props.suffix && <div css={iconright}>
          {props.suffix}
        </div>}

        {props.error && props.message &&
        <>
          <span className='text-field-2'>{props.message || 'Required'}</span>
        </>}
      </div>
      {/* <div className="">
    <label htmlFor="firstName">First Name</label>
  </div>
  <div className="">
    <input
      type="text"
      placeholder="First Name"
      className='form-input'
      disabled
    />
    <label htmlFor="firstName">First Name</label>
  </div>
  <label htmlFor="firstName">First Name</label>
  <label htmlFor="firstName">First Name</label>
  <label htmlFor="firstName">First Name</label> */}
    </>
  )
}

export default InputWrapper
