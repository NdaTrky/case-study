<template>
  <div class="min-h-screen bg-gray-100">
    <Header />
    <main class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">Nuxt 3 Test Sayfası</h1>
      <DailySpecials :specials="dailySpecials" />
      <WhyChooseUs :reasons="reasons" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import CategoryCard from './components/CategoryCard.vue';
import DailySpecials from './components/DailySpecials.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import { categories, dailySpecials, reasons } from './data/data'; // data.js dosyasını import ettik
</script>