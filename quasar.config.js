// File: quasar.config.js
import { defineConfig } from '#q-app/wrappers'
import { resolve } from 'path' // ✅ Required to use 'resolve' for alias paths

export default defineConfig(() => {
  return {
    boot: ['axios', 'pinia'], // ✅ Boot files

    css: ['app.scss'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      vueRouterMode: 'hash',

      // ✅✅ FIXED: Add alias to solve import path issues like 'pages/LoginPage.vue'
      alias: {
        '@': resolve(__dirname, './src'), // 🔁 For '@/' base path
        components: resolve(__dirname, './src/components'), // 🔁 To use: 'components/common/AppHeader.vue'
        pages: resolve(__dirname, './src/pages'), // 🔁 To use: 'pages/LoginPage.vue'
        layouts: resolve(__dirname, './src/layouts'), // 🔁 For layout: 'layouts/MainLayout.vue'
        stores: resolve(__dirname, './src/stores'), // 🔁 For: '@/stores/auth'
      },
    },

    devServer: {
      open: true, // Opens browser automatically
    },

    framework: {
      config: {},
      plugins: ['Notify'],
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      bundler: 'packager',
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      builder: {
        appId: 'ecommerce-frontend',
      },
    },

    bex: {
      extraScripts: [],
    },
  }
})
