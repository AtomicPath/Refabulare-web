import React from 'react'
import styled from 'styled-components'
import { Container, LogoFullBlack } from '../Atoms'
import device from 'devices'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container
        css={`
          display: grid;
          align-items: end;
          grid-template-columns: 1fr;
          gap: 15px;

          ${device.tablet} {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        <FooterLeft>
          <LogoFullBlack />
          <p>Refabulare - Enoc Mojica.</p>
          <p
            css={`
              margin-bottom: 0;
            `}
          >
            © 2022. @ Todos los derechos reservados.
            <br /> Made with ❤️ by LOROGRANADA
          </p>
        </FooterLeft>
        <FooterRight>
          <p>Síguenos a través de:</p>
          <SocialIcons>
            <a href="https://open.spotify.com/show/0T5PV5lGieTVJCNqIB1j2G?si=cae5918cabbf4662" target="_blank">
              <img src="/spotify.svg" />
            </a>
            <a href="https://www.instagram.com/refabulare/" target="_blank">
              <img src="/instagram.svg" />
            </a>
            <a href="https://www.facebook.com/refabulare" target="_blank">
              <img src="/facebook.svg" />
            </a>
            <a href="https://twitter.com/refabulare?s=20&t=RVN9Mp3_fnIwbwlTstu0Pw" target="_blank">
              <img src="/twitter.svg" />
            </a>
          </SocialIcons>
        </FooterRight>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 50px 0;
  background-color: var(--color-white);
  color: var(--color-black);

  ${device.tablet} {
    padding: 65px 0;
  }

  ${device.desktop} {
    padding: 90px 0;
  }
`

const FooterLeft = styled.div`
  text-align: center;

  ${device.tablet} {
    text-align: left;
  }
`

const FooterRight = styled.div`
  text-align: center;

  ${device.tablet} {
    text-align: right;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  a {
    display: inline-block;

    img {
      width: 50px;
      height: 50px;
    }
  }

  ${device.tablet} {
    justify-content: end;
  }
`

export default Footer
