export default {
  target: 'static',

  ssr: true,

  head: {
    title: 'Phindor Test',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#3b82f6'
      },
      {
        hid: 'msapplication-config',
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/icons/safari-pinned-tab.svg'
      },
      {
        name: 'theme-color',
        content: '#fff'
      }
    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // PWA Configuration
  pwa: {
    icon: false,
    manifest: {
      lang: 'en',
      name: 'Phindor Test',
      short_name: 'Phindor Test',
      start_url: '/',
      display: 'standalone',
      theme_color: '#fff',
      background_color: '#fff',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icons: [
        {
          src: '/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  },

  env: {
    appName: process.env.APP_NAME
  },

  axios: {
    baseURL: process.env.API_BASE_URL
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post'
          },
          user: {
            url: '/auth/user',
            method: 'get'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          }
        },
        user: {
          property: 'data'
        }
      }
    }
  }
}
