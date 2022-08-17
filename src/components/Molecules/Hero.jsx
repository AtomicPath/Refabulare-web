import React from "react"
import styled from "styled-components"
import device from "devices"
import { Container } from "../Atoms/Grid"
import { HeroTitle } from "../Atoms/Hero"

const Hero = ({ image, title }) => {
  return (
    <HeroWrapper>
      <HeroTitle>{title}</HeroTitle>
      {image}
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Container)``

export default Hero
