import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import { Hero } from '../components/Molecules'

const Page404 = () => {
  return (
    <Layout>
      <Hero title="Oops! No encontramos este sitio." image={<StaticImage src="../images/hero.png" alt="refabulare" />}></Hero>
    </Layout>
  )
}

export default Page404
