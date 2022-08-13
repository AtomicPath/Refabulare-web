import React from "react"

const Home = () => {
  return <div>Hello world!</div>
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

