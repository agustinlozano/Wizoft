import styled from '@emotion/styled'
import { styles } from '../../../config/styles'

export const HeaderBox = styled.header`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 16px 24px;
  z-index: 10;
  background-color: ${styles.transparentBackground};
  border-bottom: 1px solid ${styles.hightlightAccent};
  backdrop-filter: blur(6px);
`

export const HeaderContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${styles.desktopQuery}) {
    max-width: ${styles.headerMaxWidth};
    margin-left: auto;
    margin-right: auto;
  }
`
