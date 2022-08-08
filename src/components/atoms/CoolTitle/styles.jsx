import styled from '@emotion/styled'
import { styles } from '../../../config/styles'
// import { handleSelectStylesFromType } from './selectTitleStylesFromType'

export const Text = styled.h2`
  font-family: 'Inter-medium';
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  stroke-width: 1.5px;
  color: ${styles.darkAccent};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  -webkit-text-stroke-width: 0.2rem;

  @media (min-width: ${styles.desktopQuery}) {
    font-size: 3rem;
  }

  @media(max-width: ${styles.mobileQuery}) {
    font-size: 2rem;
    -webkit-text-stroke-width: 0.1rem;
  }
`
