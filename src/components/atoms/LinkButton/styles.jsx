import styled from '@emotion/styled'
import { Link as LinkFromWouter } from 'wouter'
import { styles } from '../../../config/styles'
import { BUTTONS_TYPES } from '../../../config/variableOfComponents'
import { handleSelectStyleFromType } from './selectStyleFromType'

export const Link = styled(LinkFromWouter)`
  ${({ type }) => handleSelectStyleFromType(type)}
`

export const Icon = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  align-items: center;

  ${({ type }) => type === BUTTONS_TYPES.icon && 'margin: 0;'}

  @media (min-width: ${styles.desktopQuery}) {
    width: 16px;
  }
`
