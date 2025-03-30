<template>
          <div class="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-xs text-center">
            <!-- Etiket (İndirim vs.) -->
            <span
              v-if="discount"
              :class="['absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-md text-white', badgeClasses]"
            >
              {{ discount }}
            </span>
        
            <!-- Ürün Resmi -->
            <div class="flex justify-center mb-4">
              <img :src="img" :alt="name" class="w-24 h-24 object-cover sm:w-32 sm:h-32" />
            </div>
        
            <!-- Ürün Bilgileri -->
            <p class="text-gray-600 text-xs">{{ brand }}</p>
            <h3 class="text-sm sm:text-lg font-semibold text-gray-900">{{ name }}</h3>
            
            <div class="flex flex-col items-center gap-2">
              <span class="text-green-600 font-bold">${{ price }}</span>
              <span class="text-gray-400 line-through text-sm">${{ oldPrice }}</span>
              <FontAwesomeIcon :icon="['far', 'star']" class="text-yellow-500" />
            </div>
        
            <!-- Stok Çubuğu -->
            <div class="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div
                class="bg-red-500 h-2 rounded-full"
                :style="{ width: (sold / totalStock) * 100 + '%' }"
              ></div>
            </div>
            <p class="text-xs text-gray-500 mt-1">Sold: {{ sold }}/{{ totalStock }}</p>
        
            <!-- Sepete Ekle Butonu -->
            <Button variant="primary" class="w-full">Add To Cart</Button>
          </div>
        </template>
        
        <script setup>
        import Button from "./Button.vue";
        import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
        
        defineProps({
          name: String,
          brand: String,
          price: Number,
          oldPrice: Number,
          discount: String,
          img: String,
          sold: Number,
          totalStock: Number,
          badgeColor: String,
        });
        
        const badgeClasses = {
          green: "bg-green-500",
          blue: "bg-blue-500",
          orange: "bg-orange-500",
          red: "bg-red-500",
        };
        </script>
        