// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: [
    './assets/main.css',
  ],
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    display: 'block',
    families: {
      Poppins: true,
      Agdasima: true
    }
  }
})