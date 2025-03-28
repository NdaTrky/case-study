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
      id:1,
      name:"Home",
      path: "/",
      submenu: [], // Home kısmında alt menü yok.
    },
    {
      id:2,
      name:"Category",
      path:"/category",
      submenu: [
        {name: "Meals", path:"/category/meals"},
        {name:"Drinks", path:"/category/drinks"},
      ]
    },
    {
      id:3,
      name: "Products",
      path:"/products",
      submenu: [
        {name: "Pizza", path:"/products/pizza"},
        {name: "Burger", path:"/products/burger"},
      ],
    },
    {
      id:4,
      name:"Pages",
      path:"/pages",
      submenu: [
        {name: "About", path:"/pages/about"},
        {name: "Contact", path:"/pages/contact"},
      ],  
    },
    {
      id:5,
      name:"Blog",
      path:"/blog",
      submenu: [
        {name: "Album", path:"/album"},
        {name: "Blog Details", path:"/blog/blog-details"},
      ],
    },
    {
      id:6,
      name:"Elements",
      path:"/elements",
      submenu: [
        {name: "Elements", path:"/elements"},
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
    slogan: "A Tresure of Tastes",
    sloganIcon: "logoSlogan",
  },

  // Search Alanı ve İcon

  search: {
    placeholder:"Search for delicious meals...",
    categories: [
      {id:1, name:"All Categories"},
      {id:2, name:"Meals"},
      {id:3, name:"Drinks"},
    ],
    searchIcon:"searchIcon",
    dropdownIcon:"dropdownIcon",
  },

  // Kullanıcı Butonları
  userActions: [
    {
    id:1,
    name:"Account",
    icon:"accountIcon",
    path:"/account",},
    {
      id:2,
      name:"Wishlist",
      icon:"wishlistIcon",
      path:"/wishlist",
    },
    {
      id:3,
      name:"Cart",
      icon:"cartIcon",
      path:"/cart",
    },
  ]
}

// Hero Verileri

}