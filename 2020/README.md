# interflow

An opinionated 11ty starting point for building static websites with modern tools. 

Based on [Deventy](https://github.com/ianrose/deventy) by @ianrose

Features:
- [11ty](https://www.11ty.io/)
- [Sass/SCSS](https://github.com/sass/node-sass)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [light-server](https://github.com/txchen/light-server)
- [PostCSS](https://postcss.org/)
- [CSSnano](https://cssnano.co/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

Added:
- Highwayjs
- Locomotive-scroll
- pug templates


## Getting Started

Install all dependencies using npm:

```
$ nvm use
$ npm install
```

### To Develop

```
$ npm run dev
```
 And in debug mode:
 
```
$ npm run dev:debug
```

You can view the website at the given access URL:
```
$ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

### To Build

```
npm run build
```
