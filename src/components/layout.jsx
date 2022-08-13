import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../theme.css"
import Container from "./Grid/Container"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout
