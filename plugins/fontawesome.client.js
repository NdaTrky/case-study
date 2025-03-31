// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid icons
import { 
  faUser, faHome, faCog, 
  faHeart as fasHeart, 
  faChevronLeft, faChevronRight, // Burada zaten var
  faStar,
  faBars,
  faPhoneVolume,
  faSearch,
  faChevronDown,
  faShoppingCart,
  faThumbsUp,
  faListUl,
  faBurger,
  faLeaf,
  faClock,
  faMedal,
  // Yeni eklemeler (sadece daha önce olmayanlar)
  faMapMarkerAlt, // Adres için
  faEnvelope, // Email için
  faPhoneAlt, // Telefon için
  faPaperPlane // Subscribe butonu için
  // faChevronRight'i tekrar eklemiyoruz çünkü zaten yukarıda var
} from '@fortawesome/free-solid-svg-icons'

// Regular icons
import { 
  faHeart as farHeart,
  faStar as farStar
} from '@fortawesome/free-regular-svg-icons'

// Brand icons (sosyal medya için)
import { 
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

// CSS configuration
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Tüm ikonları kütüphaneye ekle
library.add(
  // Var olan solid ikonlar
  faUser, faHome, faCog, fasHeart, faChevronLeft, faChevronRight, faStar,
  
  // Var olan regular ikonlar
  farHeart, farStar,
  
  // Navbar ikonları
  faBars,
  faPhoneVolume, 
  faSearch,
  faChevronDown,
  faShoppingCart,
  
  // Why Choose Us ikonları
  faThumbsUp,
  faListUl,
  faBurger,
  faLeaf,
  faClock,
  faMedal,
  
  // Footer için yeni eklemeler
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faPaperPlane,
  
  // Sosyal medya brand ikonları
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})