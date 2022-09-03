import styled from '@emotion/styled'
import { styles } from '../../../config/styles'

export const LinkTo = styled.a`
  display: block;
  width: 10rem;
  cursor: pointer;

  @media (min-width: ${styles.desktopQuery}) {
    width: 15rem;
  }

  @media (max-width: ${styles.mobileQuery}) {
    display: block;
    margin: auto;
  }
`
