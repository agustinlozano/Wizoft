import { TEXT_ALIGN } from '../../../config/variableOfComponents'
import { LightHeading } from './styles'

const Subtitle = ({
  children,
  align = TEXT_ALIGN.normal
}) => {
  return (
    <LightHeading align={align}>
      {children}
    </LightHeading>
  )
}

export default Subtitle
