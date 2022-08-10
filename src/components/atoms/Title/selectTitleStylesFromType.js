import { styles } from '../../../config/styles'
import { TITLE_TYPES } from '../../../config/variableOfComponents'

const secondaryStyle = `
  font-size: 24px;
  font-family: ${styles.fontMedium};

  @media(max-width: ${styles.tabletQuery}) {
    text-align: center;
  }

  @media(max-width: ${styles.mobileQuery}) {
    font-size: 0.8rem;
  }
`

const primaryStyle = `
  font-size: 69px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: ${styles.fontBlack};
  
  @media(min-width: ${styles.desktopQuery}) {
    margin-top: 0;
  }

  @media(max-width: ${styles.tabletQuery}) {
    font-size: 3.1rem;
    text-align: center;
  }

  @media(max-width: ${styles.mobileQuery}) {
    font-size: 2.5rem;
  }
`

const tertiaryStyle = `
  font-size: 16px;
  color: ${styles.hightAccent};
  font-family: ${styles.fontRegular};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const allStylesOfTitle = {
  [TITLE_TYPES.primary]: primaryStyle,
  [TITLE_TYPES.secondary]: secondaryStyle,
  [TITLE_TYPES.tertiary]: tertiaryStyle,
  default: secondaryStyle
}

export const handleSelectStylesFromType = (type) => {
  return allStylesOfTitle[type] || allStylesOfTitle.default
}
