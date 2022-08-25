module.exports = {
  siteMetadata: {
    title: "Refabulare.",
    description: "Agregar la descripción aqui.",
    siteUrl: "https://lorogranada.com/",
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 95,
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Refabulare`,
        short_name: `Refabulare`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
