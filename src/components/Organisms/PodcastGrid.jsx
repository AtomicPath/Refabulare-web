import React from 'react'
import styled from 'styled-components'
import { PodcastItem } from '../Molecules'
import device from 'devices'
import { StaticImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

const PodcastGrid = () => {
  return (
    <Fade bottom duration={1500} distance="200px">
      <PodcastRow>
        <PodcastItem
          url="https://open.spotify.com/episode/3zIFlGQCXYcBUd4CtLayyb?si=tT8nU8Q4RBaZmEAJBTEErQ"
          image={<StaticImage src="../../images/podcast-1.png" alt="podcast" />}
          title="Ep. 19 Contingencia"
          text={
            <>
              <p>Frágiles vasijas de barro.</p>
              <p>Ante una realidad que nos muestra nuestra vulnerabilidad ¿Cómo enfrentar las situaciones de pérdida y dolor?</p>
            </>
          }
        />
        <PodcastItem
          url="https://open.spotify.com/episode/4LaoxpAWlEfLbw59uY2Cqx?si=b5JxU9KKTXO_6BP5WMOcKg"
          image={<StaticImage src="../../images/podcast-2.png" alt="podcast" />}
          title="Ep. 10 Introducción al Budismo"
          text={
            <>
              <p>El budismo es un sistema de creencias NO TEÍSTA. No, el Buda no es un dios.</p>
              <p>El buda es un estado de espíritu…</p>
            </>
          }
        />
        <PodcastItem
          url="https://open.spotify.com/episode/6UVUTng6kqTrwb8XiSf2U6?si=knta85lxS7e4od9tQdmQZg"
          image={<StaticImage src="../../images/podcast-3.png" alt="podcast" />}
          title="Ep. 41 La idea de Dios"
          text={
            <>
              <p>¿Cuál es el origen de la idea De Dios?¿Cuál es el origen de los sistemas de creencias?</p>
              <p>La respuesta es sumamente interesante...</p>
            </>
          }
        />
      </PodcastRow>
    </Fade>
  )
}

const PodcastRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 15px;

  ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
  }
`

export default PodcastGrid
