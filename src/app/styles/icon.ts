import { css } from '@emotion/react'
import { mq } from './mediaQueries'

export const actionIcon = css({
  ':hover': {
    cursor: 'pointer'
  }
})

export const responsiveIcon = (sizes: Array<string>) => css`
  width: ${sizes[0]};
  height: ${sizes[0]};

  ${mq[0]} {
    width: ${sizes[1]};
    height: ${sizes[1]};
  }
`
