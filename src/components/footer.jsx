import React from "react"
import styled from "styled-components"
import { Container } from "./Atoms/Grid"
import { LogoFullBlack } from "./Atoms/Images"

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <LogoFullBlack />
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: var(--color-white);
`

export default Footer
