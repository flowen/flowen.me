import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

const SITE_NAME = "Freelance frontend UI developer and designer, Rou Hun Fan";
const SITE_DOMAIN = "https://flowen.me/";
const SITE_DESCRIPTION =
  "Freelance frontend UI developer and designer, Rou Hun Fan, working remotely for international clients";
const TWITTER_HANDLE = "@flowen_af";
const TWITTERCARD = "/social/sharecard-twitter.png";
const OGCARD = "/social/sharecard-facebook.png";
const PROJECT_KEYWORDS =
  "Remote, remote developer, front-end developer, front-end, creative developer, creative, designer, front-end designer, remote, freelancer, the Netherlands, Holland, Nederland";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <meta charset="utf-8" />

          <meta
            content={SITE_DESCRIPTION}
            name="description"
            data-hid="description"
          />
          <meta name="keywords" content={PROJECT_KEYWORDS} />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="google" value="notranslate" />

          <meta content="en-us" httpEquiv="Content-Language" />
          <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
          <meta content="on" httpEquiv="cleartype" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="black" name="apple-mobile-web-app-status-bar-style" />

          <meta content={SITE_NAME} property="og:title" />
          <meta content={SITE_DOMAIN} property="og:url" />
          <meta content={SITE_DESCRIPTION} property="og:description" />
          <meta content={OGCARD} property="og:image" />
          <meta content={SITE_NAME} property="og:site_name" />
          <meta content="website" property="og:type" />

          <meta content="true" name="HandheldFriendly" />
          <meta content={SITE_DESCRIPTION} name="description" />
          <meta content={SITE_NAME} name="apple-mobile-web-app-title" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="white" name="apple-mobile-web-app-status-bar-style" />

          <meta content="summary_large_image" name="twitter:card" />
          <meta content={TWITTER_HANDLE} name="twitter:site" />
          <meta content={TWITTER_HANDLE} name="twitter:creator" />
          <meta content={SITE_NAME} name="twitter:title" />
          <meta content={SITE_DESCRIPTION} name="twitter:description" />
          <meta content={TWITTERCARD} name="twitter:image:src" />
          <meta content={SITE_DOMAIN} name="twitter:url" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
