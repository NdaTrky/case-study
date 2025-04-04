<template>
  <section class="container mx-auto px-5 py-20">
    <!-- Başlık -->
    <div class="flex flex-col sm:flex-row items-center justify-between mb-12">
      <h2 class="text-2xl sm:text-3xl font-bold text-primary-gray text-center sm:text-left">
        Daily Best Sells
      </h2>

      <div class="flex gap-4 text-sm font-medium mt-4 sm:mt-0">
        <span class="text-primary-green cursor-pointer">Featured</span>
        <span class="text-primary-gray  cursor-pointer">Popular</span>
        <span class="text-primary-gray cursor-pointer">New added</span>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <!-- Sol Banner -->
      <div
        class="w-full md:w-1/4 bg-cover bg-center p-8 rounded-lg text-center flex flex-col justify-center items-center"
        :style="{ backgroundImage: `url(${banner.backgroundImage})` }"
      >
        <h3 class="text-xl sm:text-2xl font-semibold text-white">{{ banner.title }}</h3>
        <Button variant="primary" class="mt-4">{{ banner.buttonText }}</Button>
      </div>

      <!-- Ürün Kartları -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        <ProductCard
          v-for="product in bestSellers"
          :key="product.id"
          v-bind="product"
        />
        
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { mockData } from "@/data/data.js";
import ProductCard from "@/components/ui/ProductCard.vue";
import Button from "@/components/ui/Button.vue";

const bestSellers = mockData.bestSellers;
const banner = mockData.banner;
</script>
