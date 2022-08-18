import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Hero from "../components/Molecules/hero"

const Home = ({ data }) => {
  return (
    <>
      <Hero
        title="Transformemos nuestra historia"
        image={<StaticImage src="../images/hero.png" alt="refabulare" />}
      ></Hero>
    </>
  )
}

export default Home

// Export this at the end of each page for controlling SEO titles
// more info: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
export const Head = () => (
  <>
    <title>Refabulare - Inicio</title>
    <meta name="description" content="Hello World" />
  </>
)
