import { TEXT_ALIGN } from '../../../config/variableOfComponents'
import { Heading } from './styles'

const UpperText = ({
  children,
  align = TEXT_ALIGN.center
}) => {
  return (
    <Heading align={align}>
      {children}
    </Heading>
  )
}

export default UpperText
