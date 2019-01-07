const path = require('path')
const router = require('./config/router')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Amélie Bonet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Typography'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: 'icons/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        href: 'icons/safari-pinned-tab.svg',
        color: '#5bbad5'
      },
      { rel: 'icon', type: 'image/x-icon', href: 'icons/favicon.ico' }
    ]
  },

  router,

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  generate: {
    fallback: '404.html'
  },

  /*
  ** Global CSS
  */
  css: ['@/stylesheets/index.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
            loader: 'url-loader',
            query: {
              limit: 1000 // 1kB
            }
          }
        )
      }

      for (const ruleList of Object.values(config.module.rules || {})) {
        for (const rule of Object.values(ruleList.oneOf || {})) {
          for (const loader of rule.use) {
            const loaderModifier = loaderModifiers[loader.loader]
            if (loaderModifier) {
              loaderModifier(loader)
            }
          }
        }
      }
    }
  }
}

const loaderModifiers = {
  'sass-loader': loader => {
    loader.options.includePaths = [path.join(__dirname, 'stylesheets')]
    loader.options.data = '@import "imports";'
  }
}
