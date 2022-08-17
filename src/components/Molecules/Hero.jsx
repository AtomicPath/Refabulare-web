import React from "react"
import styled from "styled-components"
import { Container } from "../Atoms/Grid"
import { HeroLogo, HeroTitle } from "../Atoms/Hero"

const Hero = ({ title, image }) => {
  return (
    <HeroWrapper>
      <HeroLogo src="logo-white.png" alt="logo refabulare" />
      <HeroTitle>{title}</HeroTitle>
      {image}
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Container)`
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
`

export default Hero
