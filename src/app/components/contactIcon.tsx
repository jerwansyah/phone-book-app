import styled from '@emotion/styled'
import { mq } from '../styles/mediaQueries'
import User from './../svg/user.svg'

const ContactIconContainer = styled.div({
  width: '44px',
  height: '44px',
  backgroundColor: 'rgb(var(--primary-blue-light))',
  borderRadius: '50%',
  border: '1px solid rgb(var(--primary-blue-medium))',
  display : 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgb(var(--primary-blue-medium))',
  aspectRatio: '1/1',

  svg: {
    width: '24px',
    height: '24px',
    '*': {
      stroke: 'rgb(var(--primary-blue-medium))'
    }
  },

  [mq[0]]: {
    width: '80px',
    height: '80px',
    border: '2px solid rgb(var(--primary-blue-medium))',

    svg: {
      width: '32px',
      height: '32px'
    }
  }
})

export default function ContactIcon() {
  return (
    <ContactIconContainer>
      <User />
    </ContactIconContainer>
  )
}
