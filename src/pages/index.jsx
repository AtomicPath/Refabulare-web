import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Container, Sistema, StrongHoefler } from '../components/Atoms'
import { Hero } from '../components/Molecules'
import device from 'devices'

const Home = ({ data }) => {
  return (
    <>
      <Hero title="Transforma tu historia" image={<StaticImage src="../images/hero.png" alt="refabulare" />}></Hero>

      <About as="section" id="refabulare">
        <div>
          <h2
            css={`
              margin: 0;
              font-size: 30px;

              ${device.tablet} {
                font-size: 45px;
              }

              ${device.desktop} {
                font-size: 60px;
              }
            `}
          >
            Que es...
          </h2>
          <StaticImage src="../images/logo-full.png" />
          <h3
            css={`
              font-size: 22px;
            `}
          >
            Acompañamiento para la transformación existencial.
          </h3>
          <p
            css={`
              margin-bottom: 30px;
            `}
          >
            Es posible <StrongHoefler>diseñar tu propio futuro</StrongHoefler> para vivir una vida más plena y satisfactoria. Crea un proyecto de vida
            estructurado e inspirador.
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
          <h3
            css={`
              font-size: 22px;
            `}
          >
            Este programa es para ti, si:
          </h3>
          <ul>
            <li>Cuestionas tu presente y quieres dar mayor significado a tu vida.</li>
            <li>Te sientes insatisfecha o insatisfecho con tu vida laboral.</li>
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
        <Me id="sobre-mi">
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
            <h2
              css={`
                margin: 0;
                font-size: 30px;

                ${device.tablet} {
                  font-size: 45px;
                }

                ${device.desktop} {
                  font-size: 60px;
                }
              `}
            >
              Sobre mi.
            </h2>
            <h3>Soy Enoc Mojica Sauza.</h3>
            <ul
              css={`
                display: grid;
                gap: 20px;
              `}
            >
              <li>
                <strong>Economista</strong>, Maestro en <strong>Prospectiva Estratégica</strong> por el Tecnológico de Monterrey y Doctor en Estudios
                Humanísticos con estancia de investigación en la <strong>Universidad Hebrea de Jerusalén.</strong>
              </li>
              <li>
                <strong>Certificado</strong> en Redes de colaboración por la <strong>Universidad Harvard</strong> y en Gestión para el Desarrollo por
                el <strong>Banco Interamericano de Desarrollo.</strong>
              </li>
              <li>
                <strong>
                  He tomado cursos en: felicidad, ciencia del bienestar, construcción de futuro, diagnóstico de problemas para intervención,
                  propósito, identidad y significado y mediación de conflictos.
                </strong>
              </li>
              <li>
                He viajado por el mundo{' '}
                <strong>para conocer las distintas formas en las que el ser humano cree, vive y experimenta la existencia humana.</strong>
              </li>
            </ul>
          </div>
          <div
            css={`
              display: grid;
              gap: 15px;
              grid-template-columns: 1fr;

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
              Por eso, he decidido condensar estos aprendizajes para formular un programa de transformación existencial. De esta manera{' '}
              <strong>construyo el propósito de vida al ayudar a los demás a cumplir los suyos</strong>, motivándolos y acompañándolos a diseñar su
              propia ruta, única e intransferible, <strong>hacia una vida más profunda y significativa.</strong>
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
            ${device.laptop} {
              display: grid;
            }
          `}
        >
          <Container
            css={`
              grid-row-start: 1;
              grid-column-start: 1;
              z-index: 2;

              ${device.laptop} {
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
              <h2
                css={`
                  margin: 0 0 50px 0;
                  font-size: 30px;

                  ${device.tablet} {
                    font-size: 45px;
                  }

                  ${device.desktop} {
                    font-size: 60px;
                  }
                `}
              >
                Programa de acompañamiento existencial.
              </h2>
              <p
                css={`
                  margin-bottom: 50px;
                `}
              >
                Conoceremos y profundizaremos en <StrongHoefler>apasionantes historias</StrongHoefler> que se han contado por siglos, nutriendo las
                grandes ideas existenciales, para <StrongHoefler>extraer los aprendizajes</StrongHoefler> más trascendentes y aplicarlos{' '}
                <StrongHoefler>estratégicamente a nuestras vidas.</StrongHoefler>
              </p>
              <h3
                css={`
                  font-size: 22px;
                `}
              >
                CONOCE LOS 4 PASOS:
              </h3>
              <ul
                css={`
                  font-size: 17px;
                  font-family: 'Hoefler';
                  font-style: italic;
                  font-weight: bold;
                  margin-bottom: 50px;

                  ${device.tablet} {
                    font-size: 22px;
                  }
                `}
              >
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
              z-index: 0;

              .gatsby-image-wrapper {
                max-width: 45vw;
              }
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
          <Sistema />
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
              max-width: 500px;

              ${device.tablet} {
                font-size: 26px;
              }

              ${device.desktop} {
                max-width: 800px;
              }
            `}
          >
            Empezarás a ver los resultados de diseñar una vida más intencionada, y obtendrás mayor profundidad para entender tu presente y avanzar
            hacia tu futuro.
          </h4>
        </Container>

        <Container>
          <div
            css={`
              ${device.tablet} {
                display: none;
              }
            `}
          >
            <StaticImage src="../images/libreta.png" />
          </div>
          <div
            css={`
              display: none;

              ${device.tablet} {
                display: block;
              }
            `}
          >
            <StaticImage src="../images/libreta-desktop.png" />
          </div>
        </Container>
      </div>

      <BoxedSection
        id="newsletter"
        css={`
          border: 1px solid var(--color-white);

          ${device.tablet} {
            display: grid;
          }
        `}
      >
        <div
          css={`
            .gatsby-image-wrapper {
              width: 100;
            }

            ${device.tablet} {
              display: none;
            }
          `}
        >
          <StaticImage src="../images/cabeza-escultura.png" alt="cabeza escultura" />
        </div>

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
          <div
            css={`
              padding: 70px 0;
              text-align: center;

              ${device.tablet} {
                text-align: left;
              }
            `}
          >
            <h2
              css={`
                margin: 0;
                font-size: 30px;

                ${device.tablet} {
                  font-size: 45px;
                }

                ${device.desktop} {
                  font-size: 60px;
                }
              `}
            >
              Comienza a Refabular.
            </h2>
            <p
              css={`
                max-width: 500px;
                font-size: 17px;

                ${device.tablet} {
                  font-size: 20px;
                }
              `}
            >
              <StrongHoefler>Contáctanos</StrongHoefler> para crear tu plan de acompañamiento y{' '}
              <StrongHoefler>suscríbete al newsletter</StrongHoefler> para hacernos cuestionamientos que nos muevan el piso.
            </p>
            ----------- MAILCHIMP FORM HERE ------------------
          </div>
        </Container>

        <div
          css={`
            grid-row-start: 1;
            grid-column-start: 1;
            display: none;
            height: 100%;

            .gatsby-image-wrapper {
              height: 100%;
            }

            ${device.tablet} {
              display: block;
            }
          `}
        >
          <StaticImage src="../images/cabeza-escultura-desktop.png" alt="cabeza escultura" />
        </div>
      </BoxedSection>

      <BoxedSection
        id="podcast"
        css={`
          padding: 100px 0;
          position: relative;
          min-height: 600px;

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
            <h2
              css={`
                margin: 0;
                font-size: 30px;

                ${device.tablet} {
                  font-size: 45px;
                }

                ${device.desktop} {
                  font-size: 60px;
                }
              `}
            >
              Escucha el podcast de refabulare y navega más profundo.
            </h2>
          </div>
        </Container>

        <div
          css={`
            position: absolute;
            max-width: 300px;
            right: 0;
            bottom: 0;
            transform: scaleX(-1) translateX(-30%);

            ${device.tablet} {
              top: 55%;
              left: 0;
              bottom: unset;
              right: unset;
              transform: translate(-20%, -50%);
              max-width: clamp(300px, 50vw, 600px);
            }
          `}
        >
          <StaticImage src="../images/podcast-fondo.png" alt="pilares griegos" />
        </div>
      </BoxedSection>

      <Container
        css={`
          padding-top: 100px;
          padding-bottom: 100px;
        `}
      >
        ------- SPOTIFY EPISODES HERE ------------
      </Container>
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

  .gatsby-image-wrapper {
    max-width: 400px;
    margin-bottom: 30px;
  }

  ${device.tablet} {
    padding-bottom: 150px;
    align-items: center;
    grid-template-columns: 2fr 1fr;
  }

  ${device.desktop} {
    padding-top: 200px;
    padding-bottom: 200px;
  }
`

const Me = styled(Container)`
  align-items: center;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  padding-top: 51px;
  padding-bottom: 50px;

  ${device.tablet} {
    padding-top: 101px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'featured about'
      'gallery gallery';
  }
`

const OvalWithText = styled.p`
  font-family: 'Hoefler', serif;
  background-color: var(--color-black);
  font-size: clamp(14px, 3vw, 28px);
  padding: 45px 40px 40px;
  max-width: 780px;
  border: 1px solid var(--color-white);
  border-radius: 50%;
  text-align: center;
  margin: 0;
  z-index: 2;

  ${device.tablet} {
    font-style: italic;
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
