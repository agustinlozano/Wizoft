import styled from '@emotion/styled'
import { styles } from '../../../config/styles'

export const LightHeading = styled.h4`
  color: ${styles.grayAccent};
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  
  @media (min-width: ${styles.desktopQuery}) {
    text-align: left;
  }
`
