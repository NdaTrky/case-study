export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  plugins: [ '~/plugins/fontawesome.client.js'],
  image: {
        presets: {
        default: {
        modifiers: {
        quality: 80,
        format: 'webp'
        }
      }
    },
  },

  nitro: {
    compatibilityDate: '2025-03-28'
  }
})