import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container, StrongHoefler } from '../components/Atoms'
import { Hero } from '../components/Molecules'
import device from 'devices'

const Home = ({ data }) => {
  return (
    <>
      <Hero title="Transformemos nuestra historia" image={<StaticImage src="../images/hero.png" alt="refabulare" />}></Hero>
      <About as="section">
        <div>
          <h2>Que es...</h2>
          <Gif src="/logo-animado.gif" />
          <h3>Acompañamiento para la transformación existencial.</h3>
          <p>
            Es posible <StrongHoefler>diseñar tu propio futuro</StrongHoefler>
            para vivir una vida más plena y satisfactoria. Crea un proyecto de vida estructurado e inspirador.
          </p>
          <div
            css={`
              ${device.tablet} {
                display: none;
              }
            `}
          >
            <StaticImage src="../images/about-video-preview.png" alt="refabulare video" />
          </div>
          <h3>Este programa es para ti, si:</h3>
          <ul>
            <li>Cuestionas tu presente y quieres dar mayor significado a tu vida.</li>
            <li>Te sientes insatisfecha o insatisfecho vida laboral.</li>
            <li>Sientes incertidumbre respecto a tu vida.</li>
            <li>Quieres descubrir una versión más profunda y rica de ti mismo.</li>
          </ul>
        </div>
        <div
          css={`
            display: none;

            ${device.tablet} {
              display: block;
            }
          `}
        >
          <StaticImage src="../images/about-video-preview.png" alt="refabulare video" />
        </div>
      </About>
      <section
        css={`
          background-image: url('/broken.png');
          background-color: var(--color-background);
          background-size: auto 100%;
          background-position: center;
        `}
      >
        <Container
          css={`
            align-items: center;
            display: flex;
            justify-content: center;
          `}
        >
          <OvalWithText>
            Déjame acompañarte a crear la historia de vida que deseas experimentar, diseñando de forma intencionada un futuro pleno y satisfactorio.
          </OvalWithText>
        </Container>
      </section>
      <WhiteBackground>
        <Me>
          <div
            css={`
              ${device.tablet} {
                grid-area: featured;
              }
            `}
          >
            <StaticImage src="../images/about-enoc.png" alt="Enoc Mojica Sauza" />
          </div>
          <div
            css={`
              ${device.tablet} {
                grid-area: about;
              }
            `}
          >
            <h2>Sobre mi.</h2>
            <h3>Soy Enoc Mojica Sauza.</h3>
            <ul>
              <li>
                Licenciado en <strong>Economía</strong> por el
                <strong>Tecnológico de Monterrey.</strong>
              </li>
              <li>
                <strong>Maestría</strong> en
                <strong>Prospectiva Estratégica.</strong>
              </li>
              <li>
                <strong>Doctorado</strong> en
                <strong>Estudios Humanísticos</strong> con estancia de investigación en la
                <strong>Universidad Hebrea de Jerusalén.</strong>
              </li>
            </ul>
            <h3>He tomado cursos y capacitaciones sobre:</h3>
            <ul>
              <li>Construcción del Futuro</li>
              <li>Desarrollo Inclusivo</li>
              <li>Diagnóstico de Problemas Sociales</li>
              <li>Felicidad</li>
              <li>Ciencia del Bienestar</li>
              <li>Redes de Colaboración</li>
              <li>Gestión del desarrollo</li>
              <li>Búsqueda de Propósito y Significado</li>
              <li>Mediación y Resolución de Conflictos</li>
              <li>Religión como fuente de conflicto y paz</li>
              <li>Hinduísmo, Budismo e Islam</li>
            </ul>
          </div>
          <div
            css={`
              display: grid;
              gap: 15px;
              grid-template-columns: 1fr 1fr;

              ${device.tablet} {
                gap: 30px;
                grid-area: gallery;
                grid-template-columns: 1fr 1fr 1fr;
              }
            `}
          >
            <StaticImage src="../images/enoc-1.png" alt="Enoc mojica" />
            <StaticImage src="../images/enoc-2.png" alt="Enoc mojica" />
            <StaticImage src="../images/enoc-3.png" alt="Enoc mojica" />
          </div>
        </Me>

        <Container
          css={`
            align-items: center;
            display: grid;
            gap: 30px;
            margin-bottom: -20px;
            text-align: center;

            ${device.tablet} {
              grid-template-areas: 'left image right';
              grid-template-columns: 1fr 1fr 1fr;
            }
          `}
        >
          <div
            css={`
              ${device.tablet} {
                grid-area: left;
              }
            `}
          >
            <p>
              Después de todo un trayecto académico, profesional y experiencial, llegué al convencimiento de que{' '}
              <strong>
                la mejor forma de sumar a la construcción de un mejor mundo es a través del trabajo intencionado con el desarrollo del individuo.
              </strong>
            </p>
          </div>
          <div
            css={`
              ${device.tablet} {
                grid-area: right;
              }
            `}
          >
            <p>
              Por eso, he condensado estos aprendizajes para formular el programa de transformación existencial como una manera de cumplir mi{' '}
              <strong>propósito de vida</strong>, y <strong>ayudar a los demás</strong> a cumplir los suyos, <strong>motivándolos</strong> y{' '}
              <strong>acompañándolos</strong> a diseñar su propia ruta hacia una <strong>vida profunda</strong> y<strong>significativa.</strong>
            </p>
          </div>
          <div
            css={`
              align-self: end;

              ${device.tablet} {
                grid-area: image;
              }
            `}
          >
            <StaticImage src="../images/pilar.png" alt="pilar" />
          </div>
        </Container>
      </WhiteBackground>
      <section
        css={`
          margin-top: -1px;
          background-image: url('/broken-inverse.png');
          background-color: var(--color-white);
          background-size: auto 100%;
          background-position: center bottom;
        `}
      >
        <Container
          css={`
            align-items: center;
            display: flex;
            justify-content: center;
          `}
        >
          <OvalWithText>
            No es psicología, tampoco coaching, refabular es su propia disciplina y su propio arte, donde a través del cuestionamiento existencial y
            la prospectiva estratégica, aprendemos a construir vidas más intencionadas.
          </OvalWithText>
        </Container>
      </section>

      <div
        css={`
          background-image: url('/fondo-estrellas.png');
          background-size: cover;
          padding-top: 100px;
          padding-bottom: 100px;
        `}
      >
        <BoxedSection
          css={`
            ${device.tablet} {
              display: grid;
            }
          `}
        >
          <Container
            css={`
              grid-row-start: 1;
              grid-column-start: 1;

              ${device.tablet} {
                align-items: center;
                display: grid;
                grid-template-areas: 'nothing text';
                grid-template-columns: 1fr 1fr;
              }
            `}
          >
            <div
              css={`
                grid-area: text;
              `}
            >
              <h2>Programa de acompañamiento existencial.</h2>
              <p>
                Conoceremos y profundizaremos en <StrongHoefler>apasionantes historias</StrongHoefler> que se han contado por siglos, nutriendo las
                grandes ideas existenciales, para <StrongHoefler>extraer los aprendizajes</StrongHoefler> más trascendentes y aplicarlos{' '}
                <StrongHoefler>estratégicamente a nuestras vidas.</StrongHoefler>
              </p>
              <h3>CONOCE LOS 4 PASOS:</h3>
              <ul>
                <li>Navega</li>
                <li>Confronta</li>
                <li>Diseña</li>
                <li>Edifica</li>
              </ul>
            </div>
          </Container>
          <div
            css={`
              grid-row-start: 1;
              grid-column-start: 1;
            `}
          >
            <StaticImage src="../images/acompañamiento-existencial.png" alt="pilares griegos" />
          </div>
        </BoxedSection>

        <Container
          css={`
            padding-top: 100px;
            padding-bottom: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            src="/Sistema.svg"
            alt="sistema"
            css={`
              width: 100%;
            `}
          />
        </Container>

        <Container
          css={`
            display: flex;
            justify-content: center;
            text-align: center;
          `}
        >
          <h4
            css={`
              max-width: 800px;
            `}
          >
            Empezarás a ver los resultados de diseñar una vida más intencionada, y obtendrás mayor profundidad para entender tu presente y avanzar
            hacia tu futuro.
          </h4>
        </Container>
      </div>

      <BoxedSection
        css={`
          border: 1px solid var(--color-white);

          ${device.tablet} {
            display: grid;
          }
        `}
      >
        <Container
          css={`
            z-index: 1;
            grid-row-start: 1;
            grid-column-start: 1;

            ${device.tablet} {
              align-items: center;
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
          `}
        >
          <div>
            <h2>Comienza a Refabular.</h2>
            <p>
              <StrongHoefler>Contáctanos</StrongHoefler> para crear tu plan de acompañamiento y{' '}
              <StrongHoefler>suscríbete al newsletter</StrongHoefler> para hacernos cuestionamientos que nos muevan el piso.
            </p>
            ----------- MAILCHIMP FORM HERE ------------------
          </div>
        </Container>
        <div
          css={`
            z-index: 0;
            grid-row-start: 1;
            grid-column-start: 1;
          `}
        >
          <StaticImage src="../images/cabeza-escultura.png" alt="cabeza escultura" />
        </div>
      </BoxedSection>

      <BoxedSection
        css={`
          ${device.tablet} {
            display: grid;
          }
        `}
      >
        <Container
          css={`
            grid-row-start: 1;
            grid-column-start: 1;

            ${device.tablet} {
              align-items: center;
              display: grid;
              grid-template-areas: 'nothing text';
              grid-template-columns: 1fr 60%;
            }
          `}
        >
          <div
            css={`
              grid-area: text;
            `}
          >
            <h2>Escucha el podcast de refabulare y navega más profundo.</h2>
          </div>
        </Container>
        <div
          css={`
            grid-row-start: 1;
            grid-column-start: 1;
          `}
        >
          <StaticImage src="../images/podcast-fondo.png" alt="pilares griegos" />
        </div>
      </BoxedSection>
    </>
  )
}

const BoxedSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
`

const WhiteBackground = styled.div`
  margin-top: -1px;
  color: var(--color-black);
  background-color: var(--color-white);
`

const About = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  gap: 30px;

  ${device.tablet} {
    padding-top: 200px;
    padding-bottom: 200px;
    align-items: center;
    grid-template-columns: 2fr 1fr;
  }
`

const Gif = styled.img`
  max-width: 100%;
`

const Me = styled(Container)`
  align-items: center;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  padding-top: 51px;
  padding-bottom: 50px;

  ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'featured about'
      'gallery gallery';
  }
`

const OvalWithText = styled.p`
  background-color: var(--color-black);
  font-size: clamp(14px, 3vw, 28px);
  padding: 45px 40px 40px;
  max-width: 780px;
  font-family: 'Hoefler', serif;
  font-style: italic;
  border: 1px solid var(--color-white);
  border-radius: 50%;
  text-align: center;
  margin: 0;
  z-index: 2;

  ${device.tablet} {
    padding: 80px 100px;
  }
`

export default Home

// Export this at the end of each page for controlling SEO titles
// more info: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => (
  <>
    <title>Refabulare - Inicio</title>
    <meta name="description" content="Hello World" />
  </>
)
