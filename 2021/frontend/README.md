# rouhun.fan

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Pre/Post-dev configuration

0. If you use VSCode install these two extensions please:
```
Vetur: https://marketplace.visualstudio.com/items?itemName=octref.vetur
ESLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
```
  
1. Change the AWS profile in package.json for the correct deploy command
2. Edit the top in `nuxt.config.js`.
```
const PROJECT_TITLE = "[PROJECT_NAME]";
const PROJECT_DESCRIPTION = "[PROJECT_DESCRIPTION]";
const PROJECT_KEYWORDS = "MSCHF, "; // add more
const PROJECT_DOMAIN = "https://[PROJECT_DOMAIN]";
const FB_PIXEL_ID = "FB_PIXEL_ID";
```
2. Add keywords.
3. Pass in the `favicon.png` image that you get from the designer in `1536x1536` pixel to https://www.favicon-generator.org/. Download and extract the zip file in `this-project-folder/static`. Make sure that you move the favicons from the extracted folder into `this-project-folder/static`. Delete the zip and new empty folder.
```
$ git tag -a 1.0 -m "Version 1.0"
```

