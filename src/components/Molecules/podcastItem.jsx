import React from 'react'
import styled from 'styled-components'
import device from 'devices'

const PodcastItem = ({ url, image, title, text }) => {
  return (
    <PodcastCard href={url} target="_blank">
      <ImageContainer>
        {image}
        <Overlay>
          <img src="/play.svg" alt="play" />
        </Overlay>
      </ImageContainer>
      <h3>{title}</h3>
      {text}
    </PodcastCard>
  )
}

const PodcastCard = styled.a`
  text-decoration: none;
  color: var(--color-text);
  display: grid;
  gap: 15px;

  .gatsby-image-wrapper {
    border: 1px solid var(--color-white);
    aspect-ratio: 1/1;
    margin-bottom: 15px;
  }

  * {
    margin: 0;
  }

  &:last-child {
    grid-column: 1/3;
  }

  ${device.tablet} {
    &:last-child {
      grid-column: unset;
    }

    h3 {
      font-size: 30px;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
`

const Overlay = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.3s;

  ${PodcastCard}:hover & {
    opacity: 1;
  }

  img {
    width: 58px;
    height: 50px;
  }
`

export default PodcastItem
