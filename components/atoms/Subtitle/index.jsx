import { TEXT_ALIGN } from '../../../config/variableOfComponents'
import { LightHeading } from './styles'

const Subtitle = ({
  children,
}) => {
  return (
    <LightHeading>
      {children}
    </LightHeading>
  )
}

export default Subtitle
