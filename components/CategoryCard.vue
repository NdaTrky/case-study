<template>
  <div class="category-card bg-white rounded-lg shadow-md p-4">
    <img :src="category.image" alt="Category Image" class="w-full h-32 object-cover rounded-md" />
    <h3 class="text-lg font-semibold mt-2">{{ category.name }}</h3>
  </div>
</template>

<script setup>
defineProps(['category']);
</script>

<style scoped>
.category-card {
  /* İsteğe bağlı stil ayarları */
}
</style>