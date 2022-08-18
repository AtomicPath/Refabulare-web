import React from "react"
import styled from "styled-components"
import device from "devices"
import { Container } from "../Atoms/Grid"
import { HeroTitle } from "../Atoms/Hero"

const Hero = ({ image, title }) => {
  return (
    <HeroWrapper>
      <HeroTitle
        css={`
          margin: 0 0 -150px 0;

          ${device.tablet} {
            margin: 0;
          }
        `}
      >
        {title}
      </HeroTitle>
      <HeroImagen>{image}</HeroImagen>
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Container)`
  padding-bottom: 80px;
  padding-top: 80px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-template-areas:
    "title"
    "image";
  text-align: center;

  ${device.tablet} {
    text-align: left;
    grid-template-columns: 3fr 4fr;
    grid-template-areas: "image title";
  }
`

const HeroImagen = styled.div`
  grid-area: image;
  transform: scale(3);
`

export default Hero
