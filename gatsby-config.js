const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Alexander Hörl | Fullstack Software Developer`,
    description: `Fullstack web and software developer with experinces in NodeJS, React, GO and DevOps.`,
    author: `@alexanderhorl`,
    nav: [
      {
        name: 'Contact',
        link: '/contact'
      },
    ],
    footer: [
      {
        name: 'Imprint',
        link: '/imprint'
      },
    ],
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/alexanderhorl',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/AlexanderProd',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134421805-3",
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
