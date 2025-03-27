<template>
  <section class="daily-specials">
    <h2 class="text-2xl font-bold mb-4">Günün Özel Yemekleri</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DishCard v-for="special in specials" :key="special.id" :dish="special" />
    </div>
  </section>
</template>

<script setup>
defineProps(['specials']);
import DishCard from './DishCard.vue';
</script>

<style scoped>
.daily-specials {
  /* İsteğe bağlı stil ayarları */
}
</style>