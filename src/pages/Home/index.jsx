import {
  BUTTONS_TYPES,
  TEXT_ALIGN,
  TITLE_TYPES
} from '../../config/variableOfComponents'
import { linksToToggleMenu, socialMediaLinks } from '../../config/globalLinks'
import MyPhoto from '../../assets/img/me.jpg'

import Text from '../../components/atoms/Text'
import Title from '../../components/atoms/Title'

import {
  ButtonLinksContainer,
  HeaderContainer,
  HomeContainer,
  LeftContent,
  LogoImage,
  RigthContent,
  ToggleLinkLeft
} from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <LeftContent>
        <LogoImage src={MyPhoto} />
        <ToggleLinkLeft>
          {socialMediaLinks.map(({ title, url, icon }) => {
            return (
              <a
                key={title}
                href={url}
              // icon={icon}
                rel='noreferrer'
                type={BUTTONS_TYPES.icon}
              >
                {title}
              </a>
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
              <a
                key={title}
                href={url}
                title={title}
                icon={icon}
                rel='noreferrer'
                type={type || BUTTONS_TYPES.primary}
              >
                {title}
              </a>
            )
          })}
        </ButtonLinksContainer>
      </RigthContent>
    </HomeContainer>
  )
}

export default Home
