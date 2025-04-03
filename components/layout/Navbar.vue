<template>
  <header class="bg-primary-white font-poppins">
    <!-- Üst Bilgi -->
    <div class="border-b  py-3 px-4">
      <div class="container mx-auto flex items-center justify-between">
        <button class="lg:hidden" @click="toggleMobileMenu">
          <FontAwesomeIcon icon="bars" class="h-6 w-6" />
        </button>

        <!-- Masaüstü Menü -->
        <div class="hidden lg:flex flex-1 justify-center">
          <nav class="flex space-x-6">
            <div v-for="link in data.menuLinks" :key="link.id" class="relative group">
              <NuxtLink
                :to="link.path"
                class="hover:text-primary-gray flex items-center transition-colors duration-200"
                @mouseenter="link.submenu.length ? openSubmenu(link.id) : null"
              >
                {{ link.name }}
                <FontAwesomeIcon v-if="link.submenu.length" icon="chevron-down" class="h-4 w-4 ml-1" />
              </NuxtLink>

              <div
                v-if="link.submenu.length && activeSubmenu === link.id"
                class="absolute left-0 mt-2 w-48 bg-primary-white shadow-lg rounded-md py-1 z-50 border border-gray-100"
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

        <div class="flex items-center">
          <div class="bg-primary-white p-2 rounded-full">
            <FontAwesomeIcon icon="phone-volume" class="h-5 w-5 text-primary" />
          </div>
          <span class="text-sm font-medium">{{ data.contact.phone }}</span>
        </div>
      </div>
    </div>

    <!-- Mobil Menü -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-primary-white border-b">
      <nav class="container mx-auto px-4 py-4">
        <div v-for="link in data.menuLinks" :key="link.id" class="mb-2">
          <NuxtLink
            :to="link.path"
            class="block py-2 hover:text-primary-gray"
            @click="toggleMobileSubmenu(link.id)"
          >
            <div class="flex justify-between items-center">
              <span>{{ link.name }}</span>
              <FontAwesomeIcon v-if="link.submenu.length" icon="chevron-down" class="h-4 w-4" />
            </div>
          </NuxtLink>
          
          <div v-if="activeMobileSubmenu === link.id" class="ml-4">
            <NuxtLink
              v-for="sub in link.submenu"
              :key="sub.path"
              :to="sub.path"
              class="block py-2 text-sm hover:text-primary-gray"
              @click="closeAllMenus"
            >
              {{ sub.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>

    <!-- Ana İçerik -->
    <div class="container mx-auto px-2 py-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <NuxtImg src="/images/logo.png" alt="Logo" width="82" height="82" loading="lazy" />
          <div class="ml-3 flex flex-col items-center">
            <span class="text-xl font-bold">{{ data.logo.altText }}</span>
            <span>{{ data.logo.slogan }}</span>
          </div>
        </div>

        <!-- Arama Çubuğu -->
        <div class="hidden lg:flex items-center mx-6 flex-1 max-w-2xl">
          <div class="relative flex w-full border border-primary-green rounded-md overflow-hidden">
            <input type="text" :placeholder="data.search.placeholder" class="px-4 py-2 flex-grow focus:outline-none border-r" />
            <div class="relative">
              <button class="flex items-center px-4 py-3 text-sm whitespace-nowrap" @click="toggleCategoryDropdown">
                {{ selectedCategory }}
                <FontAwesomeIcon icon="chevron-down" class="h-4 w-4 ml-2" />
              </button>
              <div
                v-if="isCategoryDropdownOpen"
                class="absolute right-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-200"
                @click.stop
              >
                <button v-for="category in data.search.categories" :key="category.id" @click="selectCategory(category)" class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                  {{ category.name }}
                </button>
              </div>
            </div>
            <button class="bg-primary-search px-4 text-white hover:bg-primary">
              <FontAwesomeIcon icon="search" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Kullanıcı Aksiyonları -->
        <div class="flex items-center space-x-6">
          <NuxtLink 
            v-for="action in data.userActions" 
            :key="action.id" 
            :to="action.path" 
            class="flex items-center space-x-1 group hover:text-primary-gray"
          >
            <div class="bg-white p-2 rounded-full">
              <FontAwesomeIcon :icon="action.icon" class="h-6 w-6 text-gray-600" />
            </div>
            <span class="text-xs">{{ action.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  data: Object,
});


// Reactive state yönetimi

const isMobileMenuOpen = ref(false); 
const isCategoryDropdownOpen = ref(false); 
const activeSubmenu = ref(null); 
const activeMobileSubmenu = ref(null);
const selectedCategory = ref("All Categories"); 

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  activeMobileSubmenu.value = null;
};

const toggleMobileSubmenu = (id) => {
  activeMobileSubmenu.value = activeMobileSubmenu.value === id ? null : id;
};

const openSubmenu = (id) => {
  activeSubmenu.value = id;
};

const closeSubmenu = () => {
  activeSubmenu.value = null;
};

const closeAllMenus = () => {
  isMobileMenuOpen.value = false;
  activeMobileSubmenu.value = null;
};

const toggleCategoryDropdown = () => {
  isCategoryDropdownOpen.value = !isCategoryDropdown.value;
  activeSubmenu.value = null;
};

const selectCategory = (category) => {
  selectedCategory.value = category.name;
  isCategoryDropdownOpen.value = false;
};
</script>