import {
  BUTTONS_TYPES,
  TEXT_ALIGN,
  TITLE_TYPES
} from '../../config/variableOfComponents'
import { serviceLinks } from '../../config/globalLinks'

import ScrollButton from '../../components/atoms/ScrollButton'
import IconBulb from '../../components/ui/IconBulb'
import Text from '../../components/atoms/Text'
import Title from '../../components/atoms/Title'
import LinkButton from '../../components/atoms/LinkButton'

import {
  ButtonLinksContainer,
  HeaderContainer,
  HomeContainer,
  LeftContent,
  RightContent,
  HighlightText,
  ScrollContainer
} from './styles'

const Home = () => {
  return (
    <>
      <HomeContainer>
        <LeftContent>
          <HeaderContainer>
            <Title type={TITLE_TYPES.secondary}>SERVICIOS & SOLUCIONES WEB</Title>
            <Title type={TITLE_TYPES.primary}>
              Unite a la revolución digital y potenciá <IconBulb /> tu negocio como nunca antes
              <HighlightText>.</HighlightText>
            </Title>
          </HeaderContainer>
          <Text align={TEXT_ALIGN.left}>
            Accede al paquete que mejor se ajuste a tus necesidades y empezá a trabajar
            de manera eficiente e inteligente con la <i>magia arcana</i> de <HighlightText>Wizoft</HighlightText>.
          </Text>
        </LeftContent>

        <RightContent>
          <ButtonLinksContainer>
            {serviceLinks.map(({ title, url, icon, type }) => {
              return (
                <LinkButton
                  key={title}
                  title={title}
                  url={url}
                  icon={icon}
                  type={type || BUTTONS_TYPES.primary}
                >
                  {icon}
                </LinkButton>
              )
            })}
          </ButtonLinksContainer>
          <ScrollContainer>
            <ScrollButton />
          </ScrollContainer>
        </RightContent>
      </HomeContainer>
    </>
  )
}

export default Home
