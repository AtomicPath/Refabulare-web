import React from "react"
import Footer from "./footer"
import Header from "./header"
import "normalize.css"
import "../theme.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
