import { css } from '@emotion/react'

export const forms = css`
  .form-input {
    padding: 16px 20px;
    border-radius: 4px;
    background: rgb(var(--primary-blue-light, #EEF5FC));
    color: rgb(var(--neutral-black, #212121));
    font-size: 16px;
    line-height: 24px;
    font-family: inherit;
    box-shadow: none;


  }

  & input[type='search'] {
    background: inherit;
    border: none;

    &:focus {
      outline: none;
    }
  }

  // label
`
