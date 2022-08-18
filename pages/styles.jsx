import styled from '@emotion/styled'
import { styles } from '../config/styles'

export const HomeContainer = styled.section`
  @media (min-width: ${styles.desktopQuery}) {
    margin-bottom: 0;
    display: grid;
    grid-template-columns: minmax(700px, 1fr) 1fr;
    align-items: center;
    column-gap: 60px;
    padding-top: 0;
  }

  @media (max-width: ${styles.tabletQuery}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const LeftContent = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    width: 100%;
    max-width: 700px;
  }

  @media (max-width: ${styles.mobileQuery}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px auto;
    height: 70vh;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media (min-width: ${styles.desktopQuery}) {
    max-width: 740px;
    width: 100%;
  }

  @media (max-width: ${styles.tabletQuery}) {
    height: 100%;
    display: none;
  }
`

export const HeaderContainer = styled.div`
  padding-top: 56px;

  @media (min-width: ${styles.desktopQuery}) {
    text-align: left;
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

export const ButtonLinksContainer = styled.div`
  padding-top: 24px;

  @media (min-width: ${styles.desktopQuery}) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const ToggleLinksContainer = styled.div`
  @media (min-width: ${styles.desktopQuery}) {
    display: none;
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

/* Acerca de nuestros clientes */
export const AboutClients = styled.section`

`

/* Seccion de servicios */
export const DevelopmentStages = styled.section`
  background-color: ${styles.transparentBackground};
  margin: 100px auto;
  border-radius: 30px;
  box-shadow: ${styles.mediumShadow};

  @media (min-width: ${styles.desktopQuery}) {
    margin: 150px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /*ESTILOS PROVISORIOS*/
    width: 80%;
    min-height: 100vh;
  }
`

export const HeadingContainer = styled.div`
  width: 75%;
  margin: 5rem auto; 

  @media (max-width: ${styles.mobileQuery}) {
    width: 86%;
  }
`

export const StagesContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding: 0 2rem 5rem 4rem;
   
  @media (min-width: ${styles.desktopQuery}) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: ${styles.mobileQuery}) {
    padding: 1rem;
  }
`
