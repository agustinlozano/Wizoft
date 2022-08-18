import {
  BUTTONS_TYPES,
  TEXT_ALIGN,
  TEXT_TYPES,
  TITLE_TYPES
} from '../config/variableOfComponents'
import { serviceLinks } from '../config/globalLinks'
import { producStages } from '../config/wizoftData'

import WaveShape from '../components/atoms/WaveShape'
import UpperText from '../components/atoms/UpperText'
import Item from '../components/atoms/Item'
import ScrollButton from '../components/atoms/ScrollButton'
import CoolHeading from '../components/atoms/CoolHeading'
import Subtitle from '../components/atoms/Subtitle'
import Title from '../components/atoms/Title'
import Text from '../components/atoms/Text'
import IconBulb from '../components/ui/IconBulb'

import Head from 'next/head'
import Image from 'next/image'

import {
  AboutClients,
  ButtonLinksContainer,
  HeaderContainer,
  HeadingContainer,
  HomeContainer,
  LeftContent,
  RightContent,
  HighlightText,
  ScrollContainer,
  DevelopmentStages,
  StagesContainer
} from './styles'

export default function Home() {
  const isMobileView = false
  const isDesktopView = true

  return (
    <>
      <HomeContainer>
        <LeftContent>
          <HeaderContainer>
            <Title type={TITLE_TYPES.secondary}>SERVICIOS & SOLUCIONES WEB</Title>
            <Title type={TITLE_TYPES.primary}>
              {isMobileView
                ? (
                  <>
                    UNITE A LA REVOLUCIÓN DIGITAL Y POTENCIÁ <IconBulb width='25' /> TU NEGOCIO<HighlightText>.</HighlightText>
                  </>)
                : (
                  <>
                    Unite a la revolución digital y potenciá <IconBulb width='35' /> tu negocio como nunca antes
                    <HighlightText>.</HighlightText>
                  </>)}
            </Title>
          </HeaderContainer>
          <Text type={TEXT_TYPES.normal} align={TEXT_ALIGN.left}>
            Accede al paquete que mejor se ajuste a tus necesidades y empezá a trabajar
            de manera eficiente e inteligente con la <i>magia arcana</i> de <HighlightText><i>Wizoft</i></HighlightText>.
          </Text>
          {isMobileView
            ? (
              <ScrollContainer>
                <ScrollButton />
              </ScrollContainer>
              )
            : null}
        </LeftContent>
        <RightContent>
          <ButtonLinksContainer>
            {serviceLinks.map(({ title, url, icon, type }) => {
              return (
                <Item
                  key={title}
                  title={title}
                  url={url}
                  icon={icon}
                  type={type || BUTTONS_TYPES.primary}
                >
                  {icon}
                </Item>
              )
            })}
          </ButtonLinksContainer>
          <ScrollContainer>
            <ScrollButton />
          </ScrollContainer>
        </RightContent>
      </HomeContainer>

      {/* A quien estan dirigidos nuestros servicios */}
      <AboutClients />

      {/* Nuestros servicios */}

      <DevelopmentStages>
        <WaveShape />
        <HeadingContainer>
          <CoolHeading>¿Cómo son las etapas hasta obtener <HighlightText><i>tu producto</i></HighlightText> listo?</CoolHeading>
        </HeadingContainer>
        <StagesContainer>
          {producStages.map(({ title, subtitle, description }, index) => {
            return (
              <div className='stage' key={title}>
                <UpperText
                  align={TEXT_ALIGN.left}
                >
                  <HighlightText>#{index + 1} </HighlightText>{title}
                </UpperText>
                <Subtitle align={isDesktopView ? TEXT_ALIGN.left : TEXT_ALIGN.center}>{subtitle}</Subtitle>
                <Text type={TEXT_TYPES.low} align={TEXT_ALIGN.left}>{description}</Text>
              </div>
            )
          })}
        </StagesContainer>
      </DevelopmentStages>
    </>
  )
}