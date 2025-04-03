import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solid icons
import { 
  faUser, faHome, faCog, 
  faHeart as fasHeart, 
  faChevronLeft, faChevronRight, 
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
  faMapMarkerAlt,
  faEnvelope, 
  faPhoneAlt, 
  faPaperPlane 
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

// Tüm ikonları kütüphaneye ekleme
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