import {
  BUTTONS_TYPES,
  TEXT_ALIGN,
  TITLE_TYPES
} from '../../config/variableOfComponents'
import { linksToToggleMenu, socialMediaLinks } from '../../config/globalLinks'
import MyPhoto from '../../assets/img/me.jpg'

import Text from '../../components/atoms/Text'
import Title from '../../components/atoms/Title'
import TargetBlankButton from '../../components/atoms/TargetBlankButton'

import {
  ButtonLinksContainer,
  HeaderContainer,
  HomeContainer,
  LeftContent,
  LogoImage,
  RigthContent,
  ToggleLinkLeft
} from './styles'
import Image from 'next/image'
import { styles } from '../../config/styles'

const Home = () => {
  return (
    <HomeContainer>
      <LeftContent>
        <LogoImage>
          <Image 
            src={MyPhoto} 
            alt="My photo"
            style={{borderRadius: '50%'}}
          />
        </LogoImage>
        <ToggleLinkLeft>
          {socialMediaLinks.map(({ title, url, icon }) => {
            return (
              <TargetBlankButton
                key={title}
                url={url}
                icon={icon}
                type={BUTTONS_TYPES.icon}
              />
            )
          })}
        </ToggleLinkLeft>
      </LeftContent>

      <RigthContent>
        <HeaderContainer>
          <Title type={TITLE_TYPES.secondary}>Agustin B. Lozano</Title>
          <Title type={TITLE_TYPES.primary}>Software Engineer</Title>
        </HeaderContainer>
        <Text align={TEXT_ALIGN.left}>
          ¡Hola! Soy un desarrollador que ofrece servicios en el área de backend, frontend y soluciones de sistemas.
          Te invito a que conozcas más acerca mí y como puedo ayudarte a impulsar tu negocio.
        </Text>
        <ButtonLinksContainer>
          {linksToToggleMenu.slice(1).map(({ title, url, icon, type }) => {
            return (
              <TargetBlankButton
                key={title}
                title={title}
                url={url}
                icon={icon}
                type={type || BUTTONS_TYPES.primary}
              >
                {icon}
              </TargetBlankButton>
            )
          })}
        </ButtonLinksContainer>
      </RigthContent>
    </HomeContainer>
  )
}

export default Home
