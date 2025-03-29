export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  plugins: ['~/components/ui/icons.js'],

  image: {
        presets: {
        default: {
        modifiers: {
        quality: 80,
        format: 'webp'
        }
      }
    },
    // Varsayılan provider için (Nuxt 3'te artık gerekli değil)
    // providers: {
    //   defaultProvider: 'ipx' // Varsayılan yerel provider
    // }
  },

  nitro: {
    compatibilityDate: '2025-03-28'
  }
})