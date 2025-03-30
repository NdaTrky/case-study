<template>
  <footer class="bg-gray-100 py-16 relative">
    <!-- Dekoratif İkonlar (Font Awesome) -->
    <div class="absolute top-0 left-0 w-16 h-16 flex items-center justify-center text-4xl text-green-600">
      <i class="fas fa-lemon"></i>
    </div>
    <div class="absolute top-0 right-0 w-16 h-16 flex items-center justify-center text-4xl text-red-500">
      <i class="fas fa-carrot"></i>
    </div>
    <div class="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center text-4xl text-yellow-500">
      <i class="fas fa-pepper-hot"></i>
    </div>

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Brand Bilgileri -->
        <div>
          <div class="flex items-center gap-3 mb-6">
            <img 
              :src="footer.brand.logo" 
              alt="Foodzy Logo" 
              class="w-12 h-12 object-contain"
            />
            <h2 class="text-2xl font-bold text-gray-800">{{ footer.brand.name }}</h2>
          </div>
          <p class="text-gray-600 mb-6 text-sm leading-relaxed">{{ footer.brand.description }}</p>
          
          <div class="space-y-2">
            <div class="flex items-center text-gray-600 gap-2">
              <i class="fas fa-map-marker-alt text-red-500"></i>
              <span class="text-sm">{{ footer.brand.contact.address }}</span>
            </div>
            <div class="flex items-center text-gray-600 gap-2">
              <i class="fas fa-envelope text-red-500"></i>
              <span class="text-sm">{{ footer.brand.contact.email }}</span>
            </div>
            <div class="flex items-center text-gray-600 gap-2">
              <i class="fas fa-phone-alt text-red-500"></i>
              <span class="text-sm">{{ footer.brand.contact.phone }}</span>
            </div>
          </div>
        </div>

        <!-- Company Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-gray-800">Company</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in footer.companyLinks" :key="index">
              <a href="#" class="text-gray-600 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                <i class="fas fa-chevron-right text-xs"></i>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-gray-800">Categories</h3>
          <ul class="space-y-3">
            <li v-for="(category, index) in footer.categories" :key="index">
              <a href="#" class="text-gray-600 hover:text-red-500 transition-colors text-sm flex items-center gap-2">
                <i class="fas fa-chevron-right text-xs"></i>
                {{ category }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-6 text-gray-800">{{ footer.newsletter.title }}</h3>
          <div class="flex mb-6">
            <input 
              type="email" 
              :placeholder="footer.newsletter.placeholder"
              class="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            >
            <button class="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors font-semibold text-sm">
              Subscribe
            </button>
          </div>
          
          <!-- Sosyal Medya İkonları -->
          <div class="flex items-center gap-4">
            <a v-for="(icon, index) in footer.socialMedia.icons" :key="index" href="#" 
               class="text-gray-600 hover:text-red-500 transition-colors text-xl">
              <i :class="icon"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm">
        {{ footer.copyright }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { mockData } from '~/data/data.js';

const footer = mockData.footer;
</script>