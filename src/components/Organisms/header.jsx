import { Link } from 'gatsby'
import React, { useState } from 'react'
import device from 'devices'
import { Container, OpenMenuButton, IsotypeWhite } from 'components/Atoms'
import { HeaderMenu } from 'components/Molecules'
import styled from 'styled-components'

const Header = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Wrapper className={isMenuOpen ? 'opened' : ''}>
      <OpenMenuButton onClick={toggleMenu} isMenuOpen={isMenuOpen} />

      <Container
        as="nav"
        css={`
          align-items: center;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to="/">
          <IsotypeWhite
            css={`
              display: none;

              ${device.tablet} {
                display: block;
              }
            `}
          />
        </Link>

        <HeaderMenu menuItems={menuItems} className={isMenuOpen ? '' : 'closed'} toggleMenu={toggleMenu} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  max-width: 100vw;

  &.opened {
    position: fixed;
  }

  ${device.laptop} {
    overflow-x: hidden;

    &.opened {
      position: absolute;
    }
  }
`

export default Header
