// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'GrowRoom - EMISSION:IMPOSSIBLE',
      htmlAttrs: {
        'lang': 'en_GB',
      },
      link: [
        { rel: 'icon', sizes: '32x32', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-32x32.png' },
        { rel: 'icon', sizes: '192x192', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-192x192.png' },
        { rel: 'apple-touch-icon', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-180x180.png' },
        { rel: 'preload', as: 'image', href: '/assets/bg-desktop.png' },
        { rel: 'preload', as: 'image', href: '/assets/bg-mobile.png' },
        { rel: 'preload', as: 'image', href: '/assets/bg-mobile.png' },
        { rel: 'preload', as: 'image', href: '/assets/logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/B_Lab_logo.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/BP_Helios_logo.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/coca-cola-logo.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/Fussy_Black_Logo.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/GrowRoomGR-Logo-Only.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/Patagonia_(Unternehmen)_logo.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/Schneider_Electric_2008.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/shell-2020.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/Tony_s_Chocolonely_Logo_NL.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/United_Nations_Climate_Change_Conference_logo.svg' },
        { rel: 'canonical', href: 'https://growroom.agency' }
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
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/supabase'],
  googleFonts: {
    display: 'block',
    families: {
      Poppins: {
        wght: [400, 700, 800]
      },
      Agdasima: true
    }
  },
  supabase: {
    redirect: false,
    redirectOptions: undefined
  }
})