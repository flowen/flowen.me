const autoprefixer = require('autoprefixer');
const mqPacker = require('css-mqpacker'); // compresses media queries into a single query
const cssnano = require('css-mqpacker'); // super compressor

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.flowen.me`,
    title: 'Freelance creative developer and designer, Rou Hun Fan',
    description:
      'Freelance creative developer and designer, Rou Hun Fan, working remotely for international clients',
    keywords:
      'Creative developer, developer, front-end developer, front-end, designer, front-end designer, remote, freelancer, the Netherlands, Holland, Nederland'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Freelance creative developer and designer, Rou Hun Fan`,
        short_name: `Flowen.me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/assets/favicon/icon-512x512.png`,
        include_favicon: true
      }
    },
    'gatsby-plugin-offline', // MUST be after the manifest plugin
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img/`
      }
    },

    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`comfortaa\: 400`, `modak\: 400`]
    //   }
    // },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Comfortaa:400', 'Modak:400']
        }
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
