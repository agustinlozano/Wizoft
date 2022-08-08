import styled from '@emotion/styled'
import { styles } from '../../../config/styles'
import { handleSelectAlign } from './handleSelectAlign'

export const Heading = styled.h3`
  color: ${styles.darkAccent};
  font-family: ${styles.fontMedium};
  font-size: 1.3rem;
  text-align: center;

  @media (min-width: ${styles.desktopQuery}) {
    text-transform: uppercase;
    margin: 0;

    ${({ align }) => handleSelectAlign(align)}
  }
`
