import DownArrow from '../../ui/DownArrow'
import { styles } from '../../../config/styles'
import { BounceAnchor, bounce } from './styles'
import { css } from '@emotion/css'

const ScrollButton = ({ scrollTo }) => {
  return (
    <BounceAnchor className={css`
      animation: ${bounce} 1.5s 3;
    `}
    >
      <DownArrow color={styles.hightAccent} />
    </BounceAnchor>
  )
}

export default ScrollButton
