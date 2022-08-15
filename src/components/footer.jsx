import React from 'react'
import styled from "styled-components"
import { Logo } from "./Atoms/Footer"
import Container from "./Atoms/Grid/Container"

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Logo src="logo-footer.svg" />
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: var(--color-white);
`

export default Footer