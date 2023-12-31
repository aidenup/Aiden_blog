// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/content', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: 'dracula',
    },
  },
  devtools: { enabled: true },
  plugins: [],
})
