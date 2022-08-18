import React from "react"
import styled from "styled-components"
import device from "devices"
import { Container } from "../Atoms/Grid"
import { HeroTitle } from "../Atoms/Hero"

const Hero = ({ image, title }) => {
  return (
    <HeroWrapper>
      <HeroImagen>{image}</HeroImagen>
      <HeroTitle>{title}</HeroTitle>
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
    "image"
    "title";
`

const HeroImagen = styled.div`
  grid-area: image;
  position: relative;

  ${device.tablet} {
  }
`

export default Hero
