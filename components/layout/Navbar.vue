<template>
  <header class="bg-white text-primary font-poppins">
    <!-- ÜST BANT: Mobil Menü + Navigasyon + Telefon -->
    <div class="border-b border-gray-200 py-3 px-4">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Mobil Menü Butonu -->
        <button class="lg:hidden" @click="toggleMobileMenu">
          <component :is="$icons.menu" class="h-6 w-6" />
        </button>

        <!-- Ana Navigasyon -->
        <div class="hidden lg:flex flex-1 justify-center">
          <nav class="flex space-x-6">
            <div v-for="link in data.menuLinks" :key="link.id" class="relative group">
              <NuxtLink 
                :to="link.path"
                class="hover:text-primary-gray flex items-center transition-colors duration-200"
                @mouseenter="link.submenu.length ? openSubmenu(link.id) : null"
              >
                {{ link.name }}
                <component :is="$icons.chevronDown" v-if="link.submenu.length" class="h-4 w-4 ml-1" />
              </NuxtLink>

              <!-- Alt Menü  -->
              <div 
                v-if="link.submenu.length && activeSubmenu === link.id"
                class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-100"
                @mouseleave="closeSubmenu"
              >
                <NuxtLink
                  v-for="sub in link.submenu"
                  :key="sub.path"
                  :to="sub.path"
                  class="block px-4 py-2 text-sm hover:bg-gray-100"
                  @click="closeSubmenu"
                >
                  {{ sub.name }}
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>

        <!-- Telefon Numarası -->
        <div class="flex items-center">
          <component :is="$icons.phone" class="h-5 w-5 mr-2" />
          <span class="text-sm font-medium">{{ data.contact.phone }}</span>
        </div>
      </div>
    </div>

    <!-- ALT BANT: Logo + Search + Kullanıcı Aksiyonları -->
    <div class="container mx-auto px-2 py-2">
      <div class="flex items-center justify-between">
        <!-- Logo ve Slogan  -->
        <div class="flex items-center">
          <NuxtImg
            src="/images/logo.png" 
            alt="Logo"
            width="82"
            height="82"
            loading="lazy"
          />
          <div class="ml-3 flex flex-col items-center">
            <span class="text-xl font-bold">{{ data.logo.altText }}</span>
            <span>{{ data.logo.slogan }}</span>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="hidden lg:flex items-center mx-6 flex-1 max-w-2xl">
          <div class="relative flex w-full border border-primary-green rounded-md overflow-hidden">
            <!-- Arama Input  -->
            <input
              type="text"
              :placeholder="data.search.placeholder"
              class="px-4 py-2 flex-grow focus:outline-none border-r"
            >
            
            <!-- Kategori Dropdown -->
            <div class="relative">
              <button 
                class="flex items-center px-4 py-3 text-sm whitespace-nowrap"
                @click="toggleCategoryDropdown"
              >
                {{ selectedCategory }}
                <component :is="$icons.chevronDown" class="h-4 w-4 ml-2" />
              </button>
              
              <!-- Kategori Listesi  -->
              <div 
                v-if="isCategoryDropdownOpen"
                class="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-200"
                @click.stop
              >
                <button
                  v-for="category in data.search.categories"
                  :key="category.id"
                  @click="selectCategory(category)"
                  class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {{ category.name }}
                </button>
              </div>
            </div>
            
            <!-- Arama Butonu -->
            <button class="bg-primary-search px-4 text-white hover:bg-primary">
              <component :is="$icons.search" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Kullanıcı Aksiyonları -->
        <div class="flex items-center space-x-6">
          <NuxtLink
            v-for="action in data.userActions"
            :key="action.id"
            :to="action.path"
            class="flex items-center group hover:text-primary-gray"
          >
            <component 
              :is="action.icon === 'accountIcon' ? $icons.user : 
                   action.icon === 'wishlistIcon' ? $icons.heart : 
                   $icons.cart" 
              class="h-6 w-6"
            />
            <span class="text-xs mt-1">{{ action.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobil Menü-->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-t py-2 px-4">
      <div v-for="link in data.menuLinks" :key="link.id">
        <NuxtLink
          :to="link.path"
          class="block py-2 px-4 hover:bg-gray-100"
          @click="toggleMobileSubmenu(link.id)"
        >
          {{ link.name }}
          <component :is="$icons.chevronDown" v-if="link.submenu.length" class="h-4 w-4 ml-1 inline" />
        </NuxtLink>
        
        <!-- Mobil Alt Menüler -->
        <div v-if="link.submenu.length && activeMobileSubmenu === link.id" class="ml-4">
          <NuxtLink
            v-for="sub in link.submenu"
            :key="sub.path"
            :to="sub.path"
            class="block py-1 px-4 text-sm hover:bg-gray-50"
            @click="isMobileMenuOpen = false"
          >
            › {{ sub.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const { $icons } = useNuxtApp();

const props = defineProps({
  data: Object
});

// State'ler
const isMobileMenuOpen = ref(false);
const isCategoryDropdownOpen = ref(false);
const activeSubmenu = ref(null);
const activeMobileSubmenu = ref(null);
const selectedCategory = ref('All Categories');

// Fonksiyonlar 
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) activeMobileSubmenu.value = null;
};

const openSubmenu = (id) => {
  activeSubmenu.value = id;
};

const closeSubmenu = () => {
  activeSubmenu.value = null;
};

const toggleMobileSubmenu = (id) => {
  if (props.data.menuLinks.find(link => link.id === id).submenu.length) {
    activeMobileSubmenu.value = activeMobileSubmenu.value === id ? null : id;
  }
};

const toggleCategoryDropdown = () => {
  isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
  activeSubmenu.value = null;
};

const selectCategory = (category) => {
  selectedCategory.value = category.name;
  isCategoryDropdownOpen.value = false;
};
</script>

<style scoped>
.router-link-active {
  @apply font-medium;
}
</style>