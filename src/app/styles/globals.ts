import { css } from '@emotion/react'
import { resets } from './resets'
import { forms } from './forms'
import { buttons } from './buttons'

export const global = css`
  :root {
    --neutral-black: 33, 33, 33;
    --neutral-gray: 113, 113, 113;
    --neutral-gray-dark: 77, 77, 77;
    --neutral-gray-light: 137, 147, 158;
    --neutral-gray-blue: 171, 190, 209;
    --neutral-silver: 245, 247, 250;
    --neutral-white: 255, 255, 255;

    --primary-blue-medium: 6, 113, 224;
    --primary-blue-light: 238, 245, 252;
    --primary-azure: 219, 237, 255;

    --danger-red-medium: 224, 43, 29;
    --danger-red-light: 224, 21, 7;
    --danger-scarlet: 255, 241, 240;

    --success-green-medium: 0, 146, 98;
    --success-green-light: 241, 251, 248;

    --warning-yellow-medium: 255, 178, 64;
    --warning-yellow-light: 255, 248, 236;

    --font-family: 'Inter', sans-serif;
  }

  ${resets}
  ${forms}

  body {
    color: rgb(var(--neutral-black, #212121));
    background: rgb(var(--neutral-white, #FFF));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  // text styles

  h1 {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
  }

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }

  h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  @media screen and (min-width: 576px) {
    h1 {
      font-size: 64px;
      line-height: 76px;
    }

    h2 {
      font-size: 36px;
      line-height: 44px;
    }

    h3 {
      font-size: 28px;
      line-height: 36px;
    }

    h4 {
      font-size: 20px;
      line-height: 28px;
    }
  }

  .text-body-1 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .text-body-2 {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .text-body-3 {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  @media screen and (min-width: 576px) {
    .text-body-1 {
      font-size: 18px;
      line-height: 28px;
    }

    .text-body-2 {
      font-size: 16px;
      line-height: 24px;
    }

    .text-body-3 {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .text-button-1 {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .text-button-2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .text-button-3 {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  .text-field-1 {
    font-size: 16px;
    line-height: 24px;
  }

  .text-field-2 {
    font-size: 12px;
    line-height: 16px;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid rgb(var(--neutral-gray-blue, #8993A0));
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    width: 100vw;
    padding: 16px 24px;
    alignItems: center;
    margin: 0 auto;

    @media screen and (min-width: 576px) {
      padding: 24px;
      max-width: 856px;
    }
  }

  .flex-col {
    flex-direction: column;
  }

  ${buttons}
`

