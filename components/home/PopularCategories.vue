<template>
  <section class="container mx-auto px-4 py-8">
    <!-- Üst Başlık -->
    <div class="m-8 p-8 flex flex-col items-center font-bold">
      <h2 class="text-xl text-primary-red uppercase mb-2">{{ popularCategories.subtitle }}</h2>
      <h1 class="text-3xl text-primary-dark mb-6">{{ popularCategories.title }}</h1>
      
    </div>

    <!-- Kategori Kartları -->
    <div class="flex justify-center flex-wrap gap-12">
      <CategoryCard
        v-for="item in popularCategories.categories"
        :key="item.id"
        :name="item.name"
        :options="item.options"
        :img="item.img"
      />
    </div>
  </section>
</template>

<script setup>
import CategoryCard from "~/components/ui/CategoryCard.vue";
import { mockData } from "~/data/data.js";

const popularCategories = mockData.populerCategories;
</script>
