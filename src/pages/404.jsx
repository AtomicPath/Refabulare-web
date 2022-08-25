import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Hero } from '../components/Molecules'

const Page404 = () => {
  return <Hero title="Oops! No encontramos este sitio." image={<StaticImage src="../images/hero.png" alt="refabulare" />}></Hero>
}

export default Page404
