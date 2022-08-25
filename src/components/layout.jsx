import React from 'react'
import 'normalize.css'
import 'theme.css'
import { Footer, Header } from './Organisms'

const menuItems = [
  {
    name: 'Refabulare',
    link: '/#refabulare',
  },
  {
    name: 'Sobre mí',
    link: '/#sobre-mi',
  },
  {
    name: 'Servicios',
    link: '/servicios',
  },
  {
    name: 'Newsletter',
    link: '/#newsletter',
  },
  {
    name: 'Podcast',
    link: 'https://open.spotify.com/show/0T5PV5lGieTVJCNqIB1j2G',
    external: true,
  },
]

const Layout = ({ children }) => {
  return (
    <>
      <Header menuItems={menuItems} />
      <main css={'overflow: hidden'}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
