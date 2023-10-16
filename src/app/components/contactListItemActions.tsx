'use client'
/** @jsxImportSource @emotion/react */

import React, { FC } from 'react'
import { css } from '@emotion/react'
import { mq } from '../styles/mediaQueries'
import Edit2 from './../svg/edit-2.svg'
import Trash from './../svg/trash.svg'
import Heart from './../svg/heart.svg'
import HeartFilled from './../svg/heart-filled.svg'
import { shadow2px } from '../styles/shadows'
import { actionIcon, responsiveIcon } from '../styles/icon'

interface contactListItemActionsProps {
  edit: () => void
  delete: () => void
  favorite: () => void
}

const actionContainerStyle = css({
  display: 'inline-flex',
  width: 'fit-content',
  padding: '6px 10px',
  alignItems: 'center',
  gap: '12px',
  borderRadius: '40px',
  [mq[0]]: {
    padding: '8px 12px',
  }
})

const sizes = ['16px', '24px']

export const ContactListItemActions: FC<contactListItemActionsProps> = (props) => {
  return (
    <div css={[shadow2px, actionContainerStyle]}>
      <Edit2
        css={[responsiveIcon(sizes), actionIcon]}
        onClick={props.edit}
      />
      <Heart
        css={[responsiveIcon(sizes), actionIcon]}
        onClick={props.favorite}
      />
      <Trash
        css={
          [
            responsiveIcon(sizes),
            actionIcon,
            css({
              path: {
                stroke: 'rgb(var(--danger-red-medium))'
              }
            })
          ]
        }
        onClick={props.delete}
      />
    </div>
  )
}
