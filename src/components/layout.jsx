import React from "react"
import Footer from "./footer"
import Header from "./header"
import { Container } from "./Atoms/Grid"
import "normalize.css"
import "../theme.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container css={"min-height: 100vh"}>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
