import React from "react"
import styled from "styled-components"
import { Container } from "../Atoms/Grid"
import { HeroTitle } from "../Atoms/Hero"
import { IsotypeWhite } from "../Atoms/Images"
import device from "devices"

const Hero = ({ title, image }) => {
  return (
    <HeroWrapper>
      <IsotypeWhite
        css={`
          margin-bottom: 50px;

          ${device.tablet} {
            display: none;
          }
        `}
      />
      <HeroTitle>{title}</HeroTitle>
      {image}
    </HeroWrapper>
  )
}

const HeroWrapper = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;

  .gatsby-image-wrapper {
    width: 840px;
  }

  ${device.laptop} {
    display: grid;
    position: relative;

    .gatsby-image-wrapper {
      width: auto;
      position: absolute;
      top: -100px;
      left: -100px;
    }
  }
`

export default Hero
