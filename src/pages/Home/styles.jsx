import styled from '@emotion/styled'
import { styles } from '../../config/styles'

/**
 * Aqui utilizamos la libreria @emotion/styled para crear
 * componentes ligados a estilos. Los cuales son utiles
 * para envolver otras secciones de nuestra UI y mantener
 * los estilos separados de la logica.
*/

export const HomeContainer = styled.section`
  margin-bottom: 4rem;

  @media (min-width: ${styles.desktopQuery}) {
    margin-bottom: 0;
    display: grid;
    grid-template-columns: minmax(740px, 1fr) 1fr;
    height: 100%;
    align-items: center;
    column-gap: 60px;
    padding-top: 0;
  }
`

export const ToggleLinkLeft = styled.div`
  display: none;

  @media (min-width: ${styles.desktopQuery}) {
    display: block;
    position: absolute;
    right: 0;
    bottom: -1.5rem;
    transform: translateX(-50%);
  }
`

export const LeftContent = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    max-width: 740px;
  }
`

export const HeaderContainer = styled.div`
  padding-top: 56px;

  @media (min-width: ${styles.desktopQuery}) {
    text-align: left;
  }
`

export const ButtonLinksContainer = styled.div`
  padding-top: 24px;

  @media (min-width: ${styles.desktopQuery}) {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
  }
`

export const ToggleLinksContainer = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    display: none;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    max-width: 740px;
  }
`

export const LogoImage = styled.img`
  display: inline-block;
  margin-top: 2rem;
  max-width: 20%;
  border-radius: 50%;
  box-shadow: 0 0 0 4px ${styles.lowAccent};
  
  @media (min-width: ${styles.desktopQuery}) {
    box-shadow: 0 0 0 8px ${styles.lowAccent};
    max-width: 60%;
  }
`

export const HighlightText = styled.span`
  color: ${styles.hightlightAccent};
  font-weight: 700;
`

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
`
