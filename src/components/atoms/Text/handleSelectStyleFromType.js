import { styles } from '../../../config/styles'
import { TEXT_TYPES } from '../../../config/variableOfComponents'

const lowTextStyle = `
  @media (min-width: ${styles.desktopQuery}) {
    padding-top: 16px;
    padding-bottom: 16px;
    margin: 0;
    max-width: 1200px;
  }
`

const normalTextStyle = `
  padding-top: 48px;
  padding-bottom: 40px;

  @media (max-width: ${styles.mobileQuery}) {
    padding-top: 0;
    margin-bottom: 0;
  }
`

const allStylesFromType = {
  [TEXT_TYPES.low]: lowTextStyle,
  [TEXT_TYPES.normal]: normalTextStyle,
  default: normalTextStyle
}

export const handleSelectStyleFromType = (type) => {
  return allStylesFromType[type] || allStylesFromType.default
}
