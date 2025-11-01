import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Allerta Stencil': true,
      'DM Sans': [400, 500, 700],
    },
    download: true,
    display: 'swap',
    preload: true,
  },

  runtimeConfig: {
    apiSecretPath: process.env.NUXT_API_SECRET_PATH,
    apiSecretKey: process.env.NUXT_API_SECRET_KEY,
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      apiBaseToken: process.env.NUXT_PUBLIC_API_BASE_TOKEN,
    },
  },
})
