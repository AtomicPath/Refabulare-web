import React from "react"
import styled from "styled-components"
import { Container, LogoFullBlack } from "../Atoms"

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
