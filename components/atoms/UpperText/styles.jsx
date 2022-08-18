import styled from '@emotion/styled'
import { styles } from '../../../config/styles'
import { handleSelectAlign } from './handleSelectAlign'

export const Heading = styled.h3`
  color: ${styles.darkAccent};
  font-family: ${styles.fontMedium};
  text-transform: uppercase;
  font-size: 1.3rem;
  text-align: center;
  margin: 0;

  @media (min-width: ${styles.desktopQuery}) {
    ${({ align }) => handleSelectAlign(align)}
  }
`
