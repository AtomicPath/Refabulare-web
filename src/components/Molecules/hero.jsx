import React from 'react'
import styled from 'styled-components'
import device from 'devices'
import { HeroImagen, HeroTitle, Container } from 'components/Atoms'

const Hero = ({ image, title }) => {
  return (
    <HeroWrapper>
      <HeroTitle>{title}</HeroTitle>
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
    'title'
    'image';
  text-align: center;

  ${device.tablet} {
    text-align: left;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'image title';
  }

  ${device.laptop} {
    grid-template-columns: 3fr 4fr;
  }
`

export default Hero
