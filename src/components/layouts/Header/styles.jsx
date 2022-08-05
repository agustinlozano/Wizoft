import styled from '@emotion/styled'
import { styles } from '../../../config/styles'

export const HeaderBox = styled.header`
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 16px 24px;
  background-color: ${styles.background};
  z-index: 10;

  @media (min-width: ${styles.desktopQuery}) {
    background-color: ${styles.transparentBackground};
    backdrop-filter: blur(6px);
    border-bottom: 1px solid ${styles.hightlightAccent};
  }
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
