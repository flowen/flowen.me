// TODO: (Ramdane) read this from a custom config file, with environment configuration
const AUTHOR_NAME = "Rou Hun Fan";
const TWITTER_HANDLE = "@flowen_nl";
const PROJECT_TITLE = "Freelance frontend UI developer and designer, Rou Hun Fan";
const PROJECT_DESCRIPTION =
  "Freelance frontend UI developer and designer, Rou Hun Fan, working remotely for international clients";
const PROJECT_KEYWORDS =
  "Remote, remote developer, front-end developer, front-end, creative developer, creative, designer, front-end designer, remote, freelancer, the Netherlands, Holland, Nederland";
const PROJECT_DOMAIN = "https://rouhun.fan";
// const GA_ID = "";

export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "en",
      class: "no-js",
    },
    script: [{ src: "/head.js" }],
    title: PROJECT_TITLE,
    titleTemplate: `${PROJECT_TITLE} | %s`,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0",
      },
      { name: "referrer", content: "no-referrer" },
      {
        name: "title",
        content: PROJECT_TITLE,
      },
      {
        hid: "description",
        name: "description",
        content: PROJECT_DESCRIPTION,
      },
      {
        name: "keywords",
        content: PROJECT_KEYWORDS,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      { name: "twitter:site", content: TWITTER_HANDLE },
      {
        name: "twitter:title",
        content: PROJECT_TITLE,
      },
      {
        name: "twitter:description",
        content: PROJECT_DESCRIPTION,
      },
      {
        name: "twitter:image:src",
        content: `${PROJECT_DOMAIN}/social/sharecard-twitter.png`,
      },
      {
        name: "og:title",
        property: "og:title",
        content: PROJECT_TITLE,
      },
      { name: "og:type", property: "og:type", content: "website" },
      {
        name: "og:url",
        property: "og:url",
        content: `${PROJECT_DOMAIN}`,
      },
      {
        name: "og:image",
        property: "og:image",
        content: `${PROJECT_DOMAIN}/social/sharecard-facebook.png`,
      },
      {
        name: "og:description",
        property: "og:description",
        content: PROJECT_DESCRIPTION,
      },
      {
        name: "og:site_name",
        property: "og:site_name",
        content: PROJECT_TITLE,
      },
      { name: "author", content: AUTHOR_NAME },
      { meta: "msapplication-TileColor", content: "#ffffff" },
      { meta: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { meta: "theme-color", content: "#ffffff" },
    ],
    // script: [
    // {
    // src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    // },
    // ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/apple-icon-57x57.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/apple-icon-60x60.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/apple-icon-72x72.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/apple-icon-76x76.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/apple-icon-114x114.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/apple-icon-120x120.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/apple-icon-144x144.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/apple-icon-152x152.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/manifest.json" },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss", "splitting/dist/splitting.css"],

  /*
   ** Share variables, mixins, functions across all style files (no @import needed)
   */
  styleResources: {
    scss: ["./assets/scss/_breakpoint-mixins.scss", "./assets/scss/_mixins.scss"],
  },
  /*
   ** Plugins to load before mounting the App
   */
  env: {
    // GA_ID
  },
  // plugins: [
  // "~/plugins/vue-analytics.js",
  // { src: "~plugins/vue-scroll-lock.js", ssr: false }
  // ],
  plugins: [{ src: "~/plugins/splitting.client.js", ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/svg"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // "@nuxtjs/device",
    // "@nuxtjs/axios",
    // "cookie-universal-nuxt"
    // "nuxt-stripe-module"
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: ["gsap"],
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
