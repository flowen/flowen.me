const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Data/DOCUMENTS/_htdocs/flowen.me/2019/v3/src/pages/index.js")))
}

