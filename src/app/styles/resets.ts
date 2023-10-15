import { css } from '@emotion/react'

export const resets = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button,
  input,
  select,
  textarea {
    color: rgb(var(--neutral-black, #212121));
  }

  label,
  input,
  button,
  select,
  textarea {
    // font-family: var(--font-family, 'Inter');
  }

  ::-moz-selection {
    background: rgb(var(--primary-azure));
    color: rgb(var(--neutral-black, #212121));
    text-shadow: none;
  }

  ::selection {
    background: rgb(var(--primary-azure));
    color: rgb(var(--neutral-black, #212121));
    text-shadow: none;
  }

  input[type='search'] {
    box-sizing: border-box;
  }
`
