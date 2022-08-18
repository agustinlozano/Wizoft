import LogoLink from '../../atoms/Logo'
import ThemeButton from '../../molecules/ThemeButton'

import { HeaderBox, HeaderContainerOptions } from './styles'

const Header = () => {
  return (
    <HeaderBox>
      <HeaderContainerOptions>
        <LogoLink />
        <ThemeButton />
      </HeaderContainerOptions>
    </HeaderBox>
  )
}

export default Header
