export const mockData = {
  // Navbar ve Header Verileri
  header: {
    // Mobile Menu Butonu
    mobileMenu: {
      icon: "mobilMenuButonu",
      altText: "Mobile Menu",
    },

    // Navigasyon Menüsü 
    menuLinks: [
      {
        id: 1,
        name: "Home",
        path: "/",
        submenu: [], // Home kısmında alt menü yok.
      },
      {
        id: 2,
        name: "Category",
        path: "/category",
        submenu: [
          { name: "Meals", path: "/category/meals" },
          { name: "Drinks", path: "/category/drinks" },
        ]
      },
      {
        id: 3,
        name: "Products",
        path: "/products",
        submenu: [
          { name: "Pizza", path: "/products/pizza" },
          { name: "Burger", path: "/products/burger" },
        ],
      },
      {
        id: 4,
        name: "Pages",
        path: "/pages",
        submenu: [
          { name: "About", path: "/pages/about" },
          { name: "Contact", path: "/pages/contact" },
        ],  
      },
      {
        id: 5,
        name: "Blog",
        path: "/blog",
        submenu: [
          { name: "Album", path: "/album" },
          { name: "Blog Details", path: "/blog/blog-details" },
        ],
      },
      {
        id: 6,
        name: "Elements",
        path: "/elements",
        submenu: [
          { name: "Elements", path: "/elements" },
        ],
      },
    ],
    
    // Telefon Numarası
    contact: {
      icon: "phone",
      phone: "+123 (456) (7890)",
    },

    // Logo ve Slogan
    logo: {
      logo: "/images/logo.png",
      altText: "Foodzy",
      slogan: "A Treasure of Tastes",
      sloganIcon: "logoSlogan",
    },

    // Search Alanı ve İcon
    search: {
      placeholder: "Search for delicious meals...",
      categories: [
        { id: 1, name: "All Categories" },
        { id: 2, name: "Meals" },
        { id: 3, name: "Drinks" },
      ],
      searchIcon: "searchIcon",
      dropdownIcon: "dropdownIcon",
    },

    // Kullanıcı Butonları
    userActions: [
      {
        id: 1,
        name: "Account",
        icon: "accountIcon",
        path: "/account",
      },
      {
        id: 2,
        name: "Wishlist",
        icon: "wishlistIcon",
        path: "/wishlist",
      },
      {
        id: 3,
        name: "Cart",
        icon: "cartIcon",
        path: "/cart",
      },
    ]
  },

  // Hero Verileri
  hero: {
    title: "Self-Delicious ROAST TURKEY",
    subtitle: "Order Now",
    description: "Follow Us Now",
    ctaButton: {
      text: "Order Now",
      path: "/order"
    },
    contact: {
      phone: "268-7834-2054",
      label: "Call Us:"
    },
    address: "Tyborsavvetskatsova",
    heroImg: "/images/hero-bg.jpg"
  },


  // Populer Kategoriler Verileri
  populerCategories: {
    subtitle: "Customer Favorıtes",
    title: "Popular Categories",
    categories: [
      {
      id:1,
      img: "/images/popular-categories1.png",
      name:"Main Dish",
      options: "(86 dishes)"
      },

      {
      id:2,
      img: "/images/popular-categories2.png",
      name:"Break Fast",
      options: "(12 break fast)"
      },
      {
      id:3,
      img: "/images/popular-categories3.png",
      name:"Dessert",
      options: "(48 dessert)"
      },
      {
      id:4,
      img: "/images/popular-categories4.png",
      name:"Browse All",
      options: "(255 Items)"
      },
      {
      id:5,
      img: "/images/popular-categories5.png",
      name:"Breakfast Food",
      options: "(205 Items)"
      }
    ]

  }

 
}