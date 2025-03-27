<template>
  <div class="dish-card bg-white rounded-lg shadow-md p-4">
    <img :src="dish.image" alt="Dish Image" class="w-full h-32 object-cover rounded-md" />
    <h3 class="text-lg font-semibold mt-2">{{ dish.name }}</h3>
    <p class="text-gray-600">{{ dish.description }}</p>
    <p class="text-xl font-bold mt-2">{{ dish.price }}₺</p>
  </div>
</template>

<script setup>
defineProps(['dish']);
</script>

<style scoped>
.dish-card {
  /* İsteğe bağlı stil ayarları */
}
</style>