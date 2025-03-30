<template>
  <section class="container mx-auto px-4 py-16 relative">
    <!-- Başlık ve Navigasyon -->
    <div class="flex items-center justify-between mb-12">
      <div>
        <h4 class="text-red-500 font-semibold text-lg mb-2 uppercase tracking-wide">
          SPECIAL DISHES
        </h4>
        <h2 class="text-4xl font-bold text-gray-800">Standout Dishes From Our Menu</h2>
      </div>
      <!-- Sağdaki Ok İkonları -->
      <div class="flex gap-3">
        <button 
          @click="prevSlide"
          class="w-10 h-10 rounded-full bg-gray-200 hover:bg-red-500 transition-colors flex items-center justify-center"
        >
          <FontAwesomeIcon :icon="['fas', 'chevron-left']" class="text-gray-600 hover:text-white" />
        </button>
        <button 
          @click="nextSlide"
          class="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center transition-colors"
        >
          <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>
    <!-- Ürün Kartları -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="dish in standoutDishes.dishes" 
        :key="dish.id" 
        class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative p-6"
      >
        <!-- Kalp Butonu (Köşede) -->
        <button 
          @click="toggleLike(dish.id)"
          class="absolute top-0 right-0 w-20 h-14 bg-primary-red hover:bg-red-600 rounded-tr-xl rounded-bl-xl flex items-center justify-center shadow-lg transition-colors"
        >
          <font-awesome-icon 
            :icon="isLiked(dish.id) ? 'fas fa-heart' : 'far fa-heart'" 
            class="text-lg text-white" 
          />
        </button>
        <!-- Ürün Detayları -->
        <div class="flex justify-center mb-6">
          <img :src="dish.img" :alt="dish.name" class="w-40 h-40 object-cover rounded-full border-4 border-red-100">
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-2 text-center">{{ dish.name }}</h3>
        <p class="text-gray-600 text-center">{{ dish.options }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { mockData } from '~/data/data.js';

const standoutDishes = mockData.standoutDishes;

// Kalp İşlevselliği
const likedItems = ref(new Set());
const toggleLike = (id) => {
  if (likedItems.value.has(id)) {
    likedItems.value.delete(id);
  } else {
    likedItems.value.add(id);
  }
};
const isLiked = (id) => likedItems.value.has(id);
</script>

<style scoped>
/* Font Awesome ikonları için ek stil */
svg {
  display: inline-block;
  height: 1em;
  width: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>