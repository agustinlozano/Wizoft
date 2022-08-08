import IconDividerShape from '../../ui/IconDividerShape'
import { styles } from '../../../config/styles'
import { WavesContainer, WavesWrapper } from './styles'

const Divider = () => {
  return (
    <WavesWrapper>
      <WavesContainer>
        <IconDividerShape color={styles.hightlightAccent} />
      </WavesContainer>
    </WavesWrapper>
  )
}

export default Divider
