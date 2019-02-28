var plugins = [{
      plugin: require('/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Freelance creative developer and designer, Rou Hun Fan","short_name":"Flowen.me | creative developer","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"standalone","icon":"src/assets/favicon/icon-512x512.png","include_favicon":true},
    },{
      plugin: require('/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["comfortaa: 400","modak: 400"]},
    },{
      plugin: require('/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-77081345-1","head":false,"anonymize":true,"respectDNT":true},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
