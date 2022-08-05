import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'

export const bounce = keyframes`
  20%, 53%, 80%, 0%, 100% {
      -webkit-animation-timing-function: cubic-bezier(0.215,.61,.355,1);
      animation-timing-function: cubic-bezier(0.215,.61,.355,1);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
  }
  40%, 43% {
      -webkit-animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      -webkit-transform: translate3d(0,-30px,0);
      transform: translate3d(0,-30px,0);
  }
  70% {
      -webkit-animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      animation-timing-function: cubic-bezier(0.755,.050,.855,.060);
      -webkit-transform: translate3d(0,-15px,0);
      transform: translate3d(0,-15px,0);
  }
  90% {
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
  }
`

export const BounceAnchor = styled.a`
  width: 80px;
  cursor: pointer;
`
