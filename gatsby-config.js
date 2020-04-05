module.exports = {
    siteMetadata: {
      title: `I like Google fonts`
    },
    plugins: [
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            'Monoton, cursive'
            
             // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
          omitGoogleFont : false
        },
      },
    ]
  }