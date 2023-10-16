import { css } from '@emotion/react'

export const buttons = css`
  .btn {
    font-family: inherit;
    width: fit-content;
    color: rgb(var(--neutral-black));
    // border: 1px solid rgb(var(--neutral-white));
    border: none;
    outline: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* btn-normal */
    padding: 16px 32px;

    &:disabled {
      background: rgb(var(--primary-blue-light));
      color: rgb(var(--neutral-gray-blue));
    }
  }

  .btn-primary {
    background: rgb(var(--primary-blue-medium));
    color: rgb(var(--neutral-white));

    &:hover {
      background: rgb(var(--primary-navy));
    }

    &:focus {
      background: rgb(var(--primary-navy));
      outline: 1px solid rgb(var(--neutral-black));
    }

    &:active {
      background: rgb(var(--primary-blue-dark));
      outline: none;
      border: none;
    }

    &:disabled {
      background: rgb(var(--primary-blue-light));
      color: rgb(var(--neutral-gray-blue));
    }
  }

  .btn-secondary {
    background: rgb(var(--neutral-white));
    color: rgb(var(--primary-blue-medium));
    border: 1px solid rgb(var(--primary-blue-medium));

    &:hover {
      background: rgb(var(--primary-blue-light));
    }

    &:focus {
      background: rgb(var(--primary-blue-light));
      outline: 1px solid rgb(var(--neutral-black));
    }

    &:active {
      background: rgb(var(--primary-blue-light)));
    }

    &:disabled {
      background: rgb(var(--primary-blue-light));
      color: rgb(var(--neutral-gray-blue));
    }
  }

  .btn-tertiary {
    background: rgb(var(--neutral-white));
    color: rgb(var(--primary-blue-medium));

    &:hover {
      background: rgb(var(--primary-blue-light));
    }

    &:focus {
      background: rgb(var(--neutral-white));
      outline: 1px solid rgb(var(--neutral-black));
    }

    &:active {
      background: rgb(var(--primary-blue-light)));
    }

    &:disabled {
      background: rgb(var(--primary-blue-light));
      color: rgb(var(--neutral-gray-blue));
    }
  }

  .btn-normal {
    padding: 16px 32px;
  }

  .btn-medium {
    padding: 14px 32px;
  }

  .btn-small {
    padding: 8px 24px;
  }
`
