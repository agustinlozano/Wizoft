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
    grid-template-columns: minmax(500px, 0.5fr) 1fr;
    column-gap: 80px;
    align-items: center;
    padding-top: 0;
    padding-bottom: 100px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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

export const RigthContent = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    max-width: 740px;
  }
`

export const LogoImage = styled.div`
  display: inline-block;
  margin-top: 2rem;
  max-width: 20%;
  border-radius: 50%;
  background-color: ${styles.lowAccent};
  box-shadow: 0 0 0 4px ${styles.lowAccent};
  
  @media (min-width: ${styles.desktopQuery}) {
    box-shadow: 0 0 0 8px ${styles.lowAccent};
    max-width: 60%;
  }
`
