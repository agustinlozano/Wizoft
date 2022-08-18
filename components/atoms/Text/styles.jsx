import styled from '@emotion/styled'
import { styles } from '../../../config/styles'

import { handleSelectAlign } from './handleSelectAlign'
import { handleSelectStyleFromType } from './handleSelectStyleFromType'

export const Paragraph = styled.p`
  color: ${styles.darkAccent};
  font-size: 25px;
  text-align: center;

  @media (min-width: ${styles.desktopQuery}) {
    margin-top: 0;
    ${({ align }) => handleSelectAlign(align)}
  }

  @media(max-width: ${styles.mobileQuery}) {
    font-size: 1rem;
  }

  ${({ type }) => handleSelectStyleFromType(type)}
`
