const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker'); // compresses media queries into a single query
const cssnano = require('css-mqpacker'); // super compressor

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.flowen.me`,
    title: 'Rou Hun Fan',
    description: 'Rou Hun Fan',
    keywords: 'Front-end developer &amp; designer. \n Freelancer.'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              'default',
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true
              }
            ]
          }),
          mqPacker({
            sort: true
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`comfortaa\: 400`, `modak\: 400`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77081345-1',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    }
  ]
};
