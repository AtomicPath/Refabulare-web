import { Link } from "gatsby"
import React, { useState } from "react"
import {
  HeaderWrapper,
  HeaderMenu,
  HeaderMenuItem,
  OpenMenuMobileButton,
} from "./Atoms/Header"
import { Container } from "./Atoms/Grid"
import { LogoSmallWhite } from "./Atoms/Images"

const menuItems = [
  {
    name: "Refabulare",
    link: "/",
  },
  {
    name: "Sobre mí",
    link: "/about",
  },
  {
    name: "Servicios",
    link: "/contact",
  },
  {
    name: "Newsletter",
    link: "/contact",
  },
  {
    name: "Podcast",
    link: "https://open.spotify.com/show/0T5PV5lGieTVJCNqIB1j2G",
    external: true,
  },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <HeaderWrapper className={menuOpen ? "opened" : ""}>
      <Container
        as="nav"
        css={`
          align-items: center;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to="/">
          <LogoSmallWhite src="/logo-white.png" alt="Header" />
        </Link>

        <OpenMenuMobileButton onClick={toggleMenu} menuOpen={menuOpen}>
          {menuOpen ? (
            <img src="/icono-close.svg" alt="Menu" />
          ) : (
            <img src="/icono-menu-mobile.svg" alt="Menu" />
          )}
        </OpenMenuMobileButton>

        <HeaderMenu className={menuOpen ? "" : "closed"}>
          {menuItems.map((item, index) => (
            <HeaderMenuItem key={index} onClick={toggleMenu}>
              {item.external ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </HeaderMenuItem>
          ))}
        </HeaderMenu>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
