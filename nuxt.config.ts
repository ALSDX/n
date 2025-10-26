import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: { 'Allerta Stencil': true },
    download: true,
    display: 'swap',
    preload: true,
  },
})
