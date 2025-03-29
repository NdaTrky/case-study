// ~/components/ui/icons.js
import { defineAsyncComponent } from 'vue'

const iconComponents = {
  // Navbar ikonları
  menu: defineAsyncComponent(() => import('@heroicons/vue/24/outline/Bars3Icon')),
  search: defineAsyncComponent(() => import('@heroicons/vue/24/outline/MagnifyingGlassIcon')),
  phone: defineAsyncComponent(() => import('@heroicons/vue/24/outline/PhoneIcon')),
  chevronDown: defineAsyncComponent(() => import('@heroicons/vue/24/outline/ChevronDownIcon')),
  user: defineAsyncComponent(() => import('@heroicons/vue/24/outline/UserIcon')),
  heart: defineAsyncComponent(() => import('@heroicons/vue/24/outline/HeartIcon')),
  cart: defineAsyncComponent(() => import('@heroicons/vue/24/outline/ShoppingCartIcon')),
  
  // Hero Section için ek ikonlar
  arrowRight: defineAsyncComponent(() => import('@heroicons/vue/24/outline/ArrowRightIcon')),
  phoneSolid: defineAsyncComponent(() => import('@heroicons/vue/24/solid/PhoneIcon')),
  // İhtiyaca göre başka ikonlar ekleyebilirsiniz
}

export default defineNuxtPlugin({
  name: 'icons-plugin',
  setup(nuxtApp) {
    // Nuxt uygulamasında ikonları kullanılabilir hale getiriyoruz
    nuxtApp.provide('icons', iconComponents)
  }
})