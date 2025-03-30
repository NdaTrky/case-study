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
        icon: "user",
        path: "/account",
      },
      {
        id: 2,
        name: "Wishlist",
        icon: "heart",
        path: "/shopping-cart",
      },
      {
        id: 3,
        name: "Cart",
        icon: "fas fa-shopping-cart",
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
  },

  // Best Sellers Verileri

  bestSellers: [
    {
      id: 1,
      name: "All Natural Italian-Style Chicken Meatballs",
      brand: "Hodo Foods",
      price: 238.85,
      oldPrice: 245.8,
      discount: "Save 35%",
      img: "/images/dailybest-product1.jpeg",
      sold: 90,
      totalStock: 120,
      badgeColor: "green",
      rating:1,
    },
    {
      id: 2,
      name: "Angie’s Boomchickapop Sweet and Wommies",
      brand: "Hodo Foods",
      price: 238.85,
      oldPrice: 245.8,
      discount: "Sale",
      img: "/images/dailybest-product2.jpeg",
      sold: 90,
      totalStock: 120,
      badgeColor: "blue",
      rating:1,
    },
    {
      id: 3,
      name: "Foster Farms Takeout Crispy Classic",
      brand: "Hodo Foods",
      price: 238.85,
      oldPrice: 245.8,
      discount: "Best sale",
      img: "/images/dailybest-product3.jpeg",
      sold: 90,
      totalStock: 120,
      badgeColor: "orange",
      rating:1,
    },
    {
      id: 4,
      name: "Blue Diamond Almonds Lightly Salted",
      brand: "Hodo Foods",
      price: 238.85,
      oldPrice: 245.8,
      discount: "Save 15%",
      img: "/images/dailybest-product4.jpeg",
      sold: 90,
      totalStock: 120,
      badgeColor: "red",
      rating:1,
    },
  ],
  banner: {
    title: "Bring nature into your home",
    buttonText: "Shop Now →",
    backgroundImage: "/images/dailybest.png",
  },


  // Featured Dishes (Standout Dishes From Out Menu) Verileri
  standoutDishes: {
    subtitle: "SPECIAL DISHES",
    title: "Standout Dishes From Our Menu",
    dishes: [
      {
        id: 1,
        img: "/images/standoutdishes1.png",
        name: "Fattoush salad",
        options: "Description of the item",
       
      },
      {
        id: 2,
        img: "/images/standoutdishes2.png",
        name: "Vegetable salad",
        options: "Description of the item",
       
      },
      {
        id: 3,
        img: "/images/standoutdishes3.png",
        name: "Egg vegi salad",
        options: "Description of the item",
       
      }
    ]
  },
  
  // Deals Of The Day Verileri

  dealsOfTheDay: [
    {
      id: 1,
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      brand: "NestFood",
      price: 32.85,
      oldPrice: 33.8,
      rating: 4.0,
      img: "/images/dailydeals1.png",
    },
    {
      id: 2,
      name: "Perdue Simply Smart Organics Gluten Free",
      brand: "Old El Paso",
      price: 24.85,
      oldPrice: 26.8,
      rating: 4.0,
      img: "/images/dailydeals2.png",
    },
    {
      id: 3,
      name: "Signature Wood-Fired Mushroom and Caramelized",
      brand: "Progresso",
      price: 12.85,
      oldPrice: 13.8,
      rating: 3.0,
      img: "/images/dailydeals3.png",
    },
    {
      id: 4,
      name: "Simply Lemonade with Raspberry Juice",
      brand: "Yoplait",
      price: 15.85,
      oldPrice: 16.8,
      rating: 3.0,
      img: "/images/dailydeals4.png",
    },
  ],

  // Footer Verileri

  footer: {
    brand: {
      logo: "/images/logo.png",
      name: "Foodzy",
      description: "Foodzy is the biggest online food store. We deliver organic vegetables & fruits.",
      contact: {
        address: "123 Main St, Anytown, USA",
        email: "contact@foodzy.com",
        phone: "+1 (987) 654-3210"
      }
    },
    companyLinks: [
      "About Us",
      "Delivery Information",
      "Privacy Policy",
      "Terms & Conditions",
      "Contact Us",
      "Support Center"
    ],
    categories: [
      "Dairy & Bakery",
      "Fruits & Vegetables",
      "Snacks & Spices",
      "Juice & Drinks",
      "Chicken & Meat",
      "Fast Food"
    ],
    newsletter: {
      title: "Subscribe Our Newsletter",
      placeholder: "Enter your email address",
      decorativeIcons: [
        "/images/footer-icon.png",
        "/images/footer-icon2.png",
        "/images/footer-icon3.png"
      ]
    },
    socialMedia: {
      images: [
        "/images/footer-socialmedia.jpeg",
        "/images/footer-socialmedia2.jpeg",
        "/images/footer-socialmedia3.jpeg",
        "/images/footer-socialmedia4.jpeg",
        "/images/footer-socialmedia5.jpeg"
      ],
      icons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-instagram",
        "fab fa-pinterest",
        "fab fa-youtube"
      ],
    },
    copyright: "© 2024 Foodzy. All rights reserved."
  }
}
