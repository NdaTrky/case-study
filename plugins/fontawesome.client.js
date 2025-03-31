import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUser, faHome, faCog, 
  faHeart as fasHeart, 
  faChevronLeft, faChevronRight 
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

// CSS ayarları
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// İkonları ekle
library.add(faUser, faHome, faCog, fasHeart, farHeart, faChevronLeft, faChevronRight)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
