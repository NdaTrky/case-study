// fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Existing icons (keep these)
import { 
  faUser, faHome, faCog, 
  faHeart as fasHeart, 
  faChevronLeft, faChevronRight,
  faStar // Yıldız ikonu eklendi (solid versiyonu)
} from '@fortawesome/free-solid-svg-icons'
import { 
  faHeart as farHeart,
  faStar as farStar // Yıldız ikonu (regular versiyonu)
} from '@fortawesome/free-regular-svg-icons'

// New icons for navbar (add these)
import {
  faBars,
  faPhoneVolume,
  faSearch,
  faChevronDown,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'

// CSS configuration
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Add all icons to library (existing + new)
library.add(
  // Existing icons
  faUser, faHome, faCog, fasHeart, farHeart, faChevronLeft, faChevronRight,
  faStar, farStar, // Yıldız ikonları eklendi
  
  // New navbar icons
  faBars,
  faPhoneVolume, 
  faSearch,
  faChevronDown,
  faShoppingCart
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})