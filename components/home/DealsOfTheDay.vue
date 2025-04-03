<template>
  <section class="container mx-auto px-4 sm:px-5 py-8 md:py-12">
    <!-- Başlık ve Tümünü Gör -->
    <div class="flex flex-col sm:flex-row items-center justify-between mb-6 md:mb-8">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
        Deals Of The Day
      </h2>
      <a href="#" class="text-gray-500 hover:text-gray-700 text-xs sm:text-sm flex items-center mt-3 sm:mt-0">
        All Deals
        <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="ml-1 text-xs" />
      </a>
    </div>

    <!-- Ürün Kartları -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 md:gap-8 place-items-center">
      <div v-for="deal in dealsOfTheDay" :key="deal.id" class="relative group w-full max-w-xs space-y-4">
        <!-- Image Container -->
        <div class="w-full h-[160px] sm:h-[180px] md:h-[220px] lg:h-[240px] xl:h-[280px] rounded-lg md:rounded-xl bg-gray-100 overflow-hidden">
          <NuxtImg 
            :src="deal.img" 
            :alt="deal.name" 
            class="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
            loading="lazy"
          />
        </div>
        
        <!-- Info Card  -->
        <div class="absolute w-[calc(100%-16px)] sm:w-[calc(100%-20px)] left-1/2 -translate-x-1/2 bottom-0 transform translate-y-1/2 bg-white rounded-md sm:rounded-lg shadow-xs sm:shadow-sm p-2 sm:p-3 md:p-4 border border-gray-100">
          <p class="text-gray-500 text-[10px] xs:text-xs mb-1 truncate">{{ deal.brand }}</p>
          <h3 class="text-[11px] xs:text-xs sm:text-sm font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 leading-tight">{{ deal.name }}</h3>
          
          <div class="flex items-center justify-between">
            <!-- Fiyatlar -->
            <div>
              <span class="text-green-600 font-bold text-xs sm:text-sm">${{ deal.price.toFixed(2) }}</span>
              <span class="text-gray-400 line-through text-[10px] xs:text-xs ml-1 sm:ml-2">${{ deal.oldPrice.toFixed(2) }}</span>
            </div>
            
            <!-- Sepet Butonu -->
            <Button variant="primary" size="xs" class="flex items-center gap-0.5 px-2 py-1 sm:gap-1 sm:px-3 sm:py-1.5">
              <FontAwesomeIcon :icon="['fas', 'shopping-cart']" class="text-[10px] xs:text-xs" />
              <span class="text-[10px] xs:text-xs sm:text-sm">Add</span>
            </Button>
          </div>
          
          <!-- Rating -->
          <div class="flex items-center mt-1 sm:mt-2">
            <FontAwesomeIcon 
              v-for="i in 5" 
              :key="i" 
              :icon="['far', i <= Math.floor(deal.rating) ? 'star' : 'star']" 
              :class="['text-[10px] xs:text-xs', i <= deal.rating ? 'text-yellow-400' : 'text-gray-300']" 
            />
            <span class="text-gray-400 text-[10px] xs:text-xs ml-1">{{ deal.rating.toFixed(1) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mockData } from '~/data/data.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Button from '@/components/ui/Button.vue';

const dealsOfTheDay = mockData.dealsOfTheDay;
</script>