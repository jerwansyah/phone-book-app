import { css } from '@emotion/react'

export const forms = css`
  .form-input {
    padding: 24px 20px 8px;
    border-radius: 4px;
    border: 1px solid rgb(var(--neutral-white, #FFF));
    background: rgb(var(--primary-blue-light, #EEF5FC));
    color: rgb(var(--neutral-black, #212121));
    font-size: 16px;
    line-height: 24px;
    font-family: inherit;
    box-shadow: none;
    width: 100%;
    min-width: 300px;

    &::placeholder {
      color: rgb(var(--neutral-gray-dark, #757575));
    }

    &:hover {
      border: 1px solid rgb(var(--primary-blue-medium, #3E7BF6));
    }

    &:focus {
      -webkit-appearance: none;
      outline: none;
      border: 1px solid rgb(var(--primary-blue-medium, #3E7BF6));
      background: rgb(var(--neutral-white, #FFF));
    }

    &:disabled {
      background: rgb(var(--neutral-silver, #E0E0E0));
      color: rgb(var(--neutral-gray-dark, #757575));

      &:hover {
        border: 1px solid rgb(var(--neutral-white, #FFF));
      }
    }
  }

  input[type='search'] {
    font-family: inherit;
    background: inherit;
    border: none;
    padding: 16px 20px !important;

    &:focus {
      -webkit-appearance: none;
      outline: none;
      border: none !important;
      background: rgb(var(--neutral-white, #FFF));
    }

    &:hover {
      border: none !important;
    }
  }

  label {
    font-family: inherit;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: fit-content;

    margin-bottom: -26px;
    z-index: 1;
    position: relative;
    padding: 12px 20px 0 21px;
    pointer-events:none;
  }
`
