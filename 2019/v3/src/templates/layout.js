import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { setConfig } from 'react-hot-loader';

import twitterCard from '../assets/cards/twitter-card.png';
import ogCard from '../assets/cards/og-card.png';

import '../scss/index.scss';

// for hot-reloader to work - https://github.com/gaearon/react-hot-loader/issues/1088
setConfig({ pureSFC: true });

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      const { siteUrl, title, description, keywords } = data.site.siteMetadata;
      return (
        <>
          <Helmet
            title={title}
            meta={[
              { charSet: 'utf-8' },
              { httpEquiv: 'Content-Language', content: 'en-us' },
              { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
              { httpEquiv: 'cleartype', content: 'on' },
              {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1'
              },
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
              { name: 'google', value: 'notranslate' },
              { name: 'HandheldFriendly', content: 'true' },
              { name: 'apple-mobile-web-app-title', content: title },
              { name: 'apple-mobile-web-app-capable', content: 'yes' },
              {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'white'
              },
              { name: 'msapplication-TileColor', content: '#da532c' },
              { name: 'theme-color', content: '#ffffff' },

              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:site', content: '@flowen_nl' },
              { name: 'twitter:creator', content: '@flowen_nl' },
              { name: 'twitter:title', content: title },
              { name: 'twitter:description', content: description },
              { name: 'twitter:image:src', content: twitterCard },
              { name: 'twitter:url', content: siteUrl },

              { property: 'og:title', content: title },
              { property: 'og:url', content: siteUrl },
              { property: 'og:description', content: description },
              {
                property: 'og:image',
                content:
                  'http://www.flowen.me/static/og-card-6c5e22ec42ca8bab181416585ff9c09b.png'
              },
              { property: 'og:image:secure_url', content: ogCard },
              { property: 'og:image:alt', content: title },
              { property: 'og:site_name', content: title },
              { property: 'og:type', content: 'website' }
            ]}
          >
            <html lang="en" />
          </Helmet>

          <main className="layout">{children}</main>
        </>
      );
    }}
  />
);

export default Layout;
