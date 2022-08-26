import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Container } from '../components/Atoms'
import device from 'devices'
import { Link } from 'gatsby'

const Servicios = () => {
  return (
    <main
      css={`
        padding-top: 100px;
        padding-bottom: 100px;
        color: var(--color-black);
        min-height: 100vh;
        background-image: url('/fondo-servicios.png');
        background-size: cover;
      `}
    >
      <Service id="navega">
        <StaticImage src="../images/service-1.png" alt="Platicas y conferencias" />
        <Info>
          <h2>Pláticas y conferencias</h2>
          <p>
            Aprende cómo las historias y los grandes sistemas de creencias se han hecho <strong>las mismas preguntas que tú tienes hoy.</strong>
          </p>
          <p>
            Podrás acceder a contenidos gratuitos, o agendar conferencias grupales para que explores temas que resuenen con tu{' '}
            <strong>etapa de vida y tu búsqueda.</strong>
          </p>
        </Info>
      </Service>

      <Service inverse id="confronta">
        <Info>
          <h2>Talleres grupales</h2>
          <p>(9-15 personas)</p>
          <p>
            Genera <strong>cuestionamientos profundos</strong>, inspirados en las ideas y propuestas de grandes pensadores.
          </p>
          <p>Podrás inscribirte a los talleres divididos en bloques de acuerdo a tus fechas y horarios disponibles.</p>
        </Info>
        <StaticImage src="../images/service-2.png" alt="Platicas y conferencias" />
      </Service>

      <Service id="disena">
        <StaticImage src="../images/service-3.png" alt="Platicas y conferencias" />
        <Info>
          <h2>Acompañamiento individual o grupal</h2>
          <p>(máximo 4 personas)</p>

          <p>
            A través de una metodología especializada de 10 sesiones, generarás un <strong>“Diseño de futuro personal”</strong>.
          </p>

          <p>
            Podrás agendar tus sesiones personalizadas y <strong>avanzar a tu ritmo.</strong>
          </p>
        </Info>
      </Service>

      <Service inverse id="edifica">
        <Info>
          <h2>Acompañamiento individual y plan de implementación</h2>
          <p>
            Te ayudaré a <strong>poner en marcha</strong> ese diseño de futuro que realizaste, acompañando la <strong>implementación</strong> con
            acciones claves y objetivos medibles.
          </p>
          <p>
            Podremos generar un <strong>plan especializado</strong>, de acuerdo a tus expectativas y necesidades.
          </p>
          <p>
            Empezarás a ver los resultados de diseñar <strong>una vida más intencionada</strong>, y obtendrás mayor profundidad para entender tu
            presente y <strong>avanzar hacia tu futuro.</strong>
          </p>
        </Info>
        <StaticImage src="../images/service-4.png" alt="Platicas y conferencias" />
      </Service>
      <Container
        css={`
          padding-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Link
          to="/"
          css={`
            max-width: 200px;

            ${device.tablet} {
              max-width: 350px;
            }
          `}
        >
          <StaticImage src="../images/service-back.svg" alt="" />
        </Link>
      </Container>
    </main>
  )
}

const Service = styled(Container)`
  align-items: center;
  display: grid;

  :not(:last-child) {
    margin-bottom: 50px;
  }

  ${device.tablet} {
    grid-template-columns: ${({ inverse }) => (inverse ? '2fr 1fr' : '1fr 2fr')};
    gap: 30px;
  }
`

const Info = styled.div`
  order: 1;

  h2 {
    font-size: 25px;
  }

  ${device.tablet} {
    order: unset;
    padding: 50px;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }

  ${device.desktop} {
    padding: 100px;

    h2 {
      font-size: 40px;
    }
  }
`

export default Servicios
