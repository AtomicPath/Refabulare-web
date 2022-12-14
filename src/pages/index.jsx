import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Container, Sistema, StrongHoefler, VideoModal } from '../components/Atoms'
import { Hero, PodcastItem } from '../components/Molecules'
import device from 'devices'
import Fade from 'react-reveal/Fade'
import { PodcastGrid } from '../components/Organisms'
import Layout from '../components/layout'

const Home = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <Layout>
      <Hero title="Transforma tu historia" image={<StaticImage src="../images/hero.png" alt="refabulare" />} />

      <About as="section" id="refabulare">
        <div
          css={`
            max-width: 600px;
          `}
        >
          <Fade left duration={1500}>
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
              Qué es...
            </h2>
            <StaticImage src="../images/logo-full.png" alt="refabulare logo" />
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
              Es posible <StrongHoefler>diseñar tu propio futuro</StrongHoefler> para vivir una vida más plena y satisfactoria. Crea un proyecto de
              vida estructurado e inspirador.
            </p>

            <button
              onClick={() => setIsOpenModal(true)}
              css={`
                ${device.tablet} {
                  display: none;
                }
              `}
            >
              <Fade right duration={1500}>
                <StaticImage src="../images/about-video-preview.png" alt="refabulare video" />
              </Fade>
            </button>
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
          </Fade>
        </div>
        <button
          onClick={() => setIsOpenModal(true)}
          css={`
            display: none;

            ${device.tablet} {
              display: block;
            }
          `}
        >
          <Fade right duration={1500}>
            <StaticImage src="../images/about-video-preview.png" alt="refabulare video" />
          </Fade>
        </button>
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
          <Fade bottom duration={1500}>
            <OvalWithText>
              Déjame acompañarte a crear la historia de vida que deseas experimentar, diseñando de forma intencionada un futuro pleno y satisfactorio.
            </OvalWithText>
          </Fade>
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
            <Fade bottom duration={1500} distance="200px">
              <StaticImage src="../images/about-enoc.png" alt="Enoc Mojica Sauza" />
            </Fade>
          </div>
          <div
            css={`
              ${device.tablet} {
                grid-area: about;
              }
            `}
          >
            <Fade bottom duration={1500} delay={500} distance="200px">
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
                Sobre mí.
              </h2>
              <h3>Soy Enoc Mojica Sauza.</h3>
              <ul
                css={`
                  display: grid;
                  gap: 20px;
                `}
              >
                <li>
                  <strong>Economista</strong>, Maestro en <strong>Prospectiva Estratégica</strong> por el Tecnológico de Monterrey y Doctor en
                  Estudios Humanísticos con estancia de investigación en la <strong>Universidad Hebrea de Jerusalén.</strong>
                </li>
                <li>
                  <strong>Certificado</strong> en Redes de colaboración por la <strong>Universidad Harvard</strong> y en Gestión para el Desarrollo
                  por el <strong>Banco Interamericano de Desarrollo.</strong>
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
            </Fade>
          </div>

          <div
            css={`
              display: grid;
              gap: 15px;
              grid-template-columns: 1fr;

              .gatsby-image-wrapper {
                height: 100%;
              }

              ${device.tablet} {
                gap: 30px;
                grid-area: gallery;
                grid-template-columns: 1fr 1fr 1fr;
              }
            `}
          >
            <Fade bottom duration={1500} distance="200px">
              <StaticImage src="../images/enoc-1.png" alt="Enoc mojica" />
            </Fade>
            <Fade bottom duration={1500} delay={500} distance="200px">
              <StaticImage src="../images/enoc-2.png" alt="Enoc mojica" />
            </Fade>
            <Fade bottom duration={1500} delay={1000} distance="200px">
              <StaticImage src="../images/enoc-3.png" alt="Enoc mojica" />
            </Fade>
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
            <Fade bottom duration={1500} distance="200px">
              <p>
                Después de todo un trayecto académico, profesional y experiencial, llegué al convencimiento de que{' '}
                <strong>
                  la mejor forma de sumar a la construcción de un mejor mundo es a través del trabajo intencionado con el desarrollo del individuo.
                </strong>
              </p>
            </Fade>
          </div>
          <div
            css={`
              ${device.tablet} {
                grid-area: right;
              }
            `}
          >
            <Fade bottom duration={1500} distance="200px">
              <p>
                Por eso, he decidido condensar estos aprendizajes para formular un programa de transformación existencial. De esta manera{' '}
                <strong>construyo el propósito de vida al ayudar a los demás a cumplir los suyos</strong>, motivándolos y acompañándolos a diseñar su
                propia ruta, única e intransferible, <strong>hacia una vida más profunda y significativa.</strong>
              </p>
            </Fade>
          </div>
          <div
            css={`
              align-self: end;

              ${device.tablet} {
                grid-area: image;
              }
            `}
          >
            <Fade bottom duration={1500} distance="200px">
              <StaticImage src="../images/pilar.png" alt="pilar" />
            </Fade>
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
              <Fade right duration={1500} distance="200px">
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
              </Fade>
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
            <Fade left duration={1500} distance="200px">
              <StaticImage src="../images/acompañamiento-existencial.png" alt="pilares griegos" />
            </Fade>
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
          <Fade bottom duration={1500} distance="200px">
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
          </Fade>
        </Container>

        <Container>
          <div
            css={`
              ${device.tablet} {
                display: none;
              }
            `}
          >
            <Fade bottom duration={1500} distance="200px">
              <StaticImage src="../images/libreta.png" alt="libreta" />
            </Fade>
          </div>
          <div
            css={`
              display: none;

              ${device.tablet} {
                display: block;
              }
            `}
          >
            <Fade bottom duration={1500} distance="200px">
              <StaticImage src="../images/libreta-desktop.png" alt="libreta" />
            </Fade>
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
          <Fade bottom duration={1500} distance="200px">
            <StaticImage src="../images/cabeza-escultura.png" alt="cabeza escultura" />
          </Fade>
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
            <Fade bottom duration={1500} distance="200px">
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
              <form
                css={`
                  width: 100%;
                  max-width: 300px;
                  display: grid;
                  gap: 10px;
                  margin: 0 auto;

                  ${device.tablet} {
                    margin: 0;
                  }
                `}
                action="https://gmail.us8.list-manage.com/subscribe/post?u=230b9e1d627e1de0f4d862abe&amp;id=b4d2673f35&amp;f_id=00d675e0f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_self"
              >
                <input
                  css={`
                    border: 0;
                    width: 100%;
                    padding: 10px;
                    background-color: #d9d9d9;
                    font-size: 20px;
                    ::placeholder {
                      color: var(--color-black);
                    }
                  `}
                  type="email"
                  name="EMAIL"
                  placeholder="Email"
                  required
                />
                <input
                  css={`
                    border: 0;
                    width: 100%;
                    padding: 10px;
                    background-color: #d9d9d9;
                    font-size: 20px;

                    ::placeholder {
                      color: var(--color-black);
                    }
                  `}
                  type="text"
                  name="FNAME"
                  placeholder="Nombre"
                />
                <div css="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="text" name="b_230b9e1d627e1de0f4d862abe_b4d2673f35" tabIndex="-1" />
                </div>
                <div>
                  <div>
                    <input
                      css={`
                        width: 100%;
                        padding: 10px;
                        color: var(--color-white);
                        background-color: var(--color-black);
                        border: 1px solid var(--color-white);
                        font-family: 'Hoefler';
                        font-style: italic;
                        font-size: 20px;
                        
                        &:hover {
                          color: var(--color-black);
                          background-color: var(--color-white);
                          border: 1px solid var(--color-black);
                        }
                      `}
                      type="submit"
                      value="Enviar"
                      name="subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </Fade>
          </div>
        </Container>

        <div
          css={`
            grid-row-start: 1;
            grid-column-start: 1;
            display: none;
            height: 100%;

            .react-reveal {
              height: 100%;
            }

            .gatsby-image-wrapper {
              height: 100%;
            }

            ${device.tablet} {
              display: block;
            }
          `}
        >
          <Fade right duration={1500} distance="200px">
            <StaticImage src="../images/cabeza-escultura-desktop.png" alt="cabeza escultura" />
          </Fade>
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
            <Fade bottom duration={1500} distance="200px">
              <h2
                css={`
                  margin: 0 0 1em;
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

              <img src="/spotify-gray.svg" alt="spotify gray" />
            </Fade>
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
          <div
            css={`
              ${device.tablet} {
                display: none;
              }
            `}
          >
            <Fade left duration={1500} distance="200px">
              <StaticImage src="../images/podcast-fondo.png" alt="pilares griegos" />
            </Fade>
          </div>

          <div
            css={`
              display: none;
              ${device.tablet} {
                display: block;
              }
            `}
          >
            <Fade left duration={1500} distance="200px">
              <StaticImage src="../images/podcast-fondo.png" alt="pilares griegos" />
            </Fade>
          </div>
        </div>
      </BoxedSection>

      <Container
        css={`
          padding-bottom: 100px;

          ${device.tablet} {
            padding-bottom: 150px;
          }

          ${device.laptop} {
            padding-bottom: 200px;
          }
        `}
      >
        <PodcastGrid />
      </Container>

      {isOpenModal && (
        <VideoModal onClick={() => setIsOpenModal(false)}>
          <button onClick={() => setIsOpenModal(false)}>
            <img src="/icono-close-white.svg" alt="icono refabulare" />
          </button>
          <iframe
            src={`https://www.youtube.com/embed/mdCByq4ty50?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </VideoModal>
      )}
    </Layout>
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
    <meta name="title" content="Refabulare" />
    <meta name="description" content="Acompañamiento para la transformación existencial. Déjame acompañarte a crear la historia de vida que deseas experimentar, diseñando de forma intencionada un futuro pleno y satisfactorio." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <meta property="og:description" content="Acompañamiento para la transformación existencial. Déjame acompañarte a crear la historia de vida que deseas experimentar, diseñando de forma intencionada un futuro pleno y satisfactorio." /> 
    <meta property="og:image" content="../images/logo-full.png" />
  </>
)
