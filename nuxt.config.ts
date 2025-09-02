// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', sizes: '32x32', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-32x32.png' },
        { rel: 'icon', sizes: '192x192', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-192x192.png' },
        { rel: 'apple-touch-icon', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-180x180.png' },
      ],
      meta: [
        { name: 'msapplication-TileImage', content: `https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-270x270.png` }
      ]
    }
  },
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