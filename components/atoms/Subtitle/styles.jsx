import styled from '@emotion/styled'
import { styles } from '../../../config/styles'
import { handleSelectAlign } from './handleSelectAlign'

export const LightHeading = styled.h4`
  color: ${styles.grayAccent};
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  ${({ align }) => handleSelectAlign(align)};
`
