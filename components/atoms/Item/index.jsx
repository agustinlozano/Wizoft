import PropTypes from 'prop-types'
import { Icon, Item } from './styles'
import { BUTTONS_TYPES } from '../../../config/variableOfComponents'

const MyButton = ({
  title = '',
  icon,
  type = BUTTONS_TYPES.primary
}) => {
  return (
    <Item text={title} type={type}>
      {title}
      {icon && <Icon type={type}>{icon}</Icon>}
    </Item>
  )
}

MyButton.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  icon: PropTypes.oneOfType([PropTypes.any, PropTypes.node])
}

export default MyButton
