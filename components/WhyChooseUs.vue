<template>
  <section class="why-choose-us">
    <h2 class="text-2xl font-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
    <ul>
      <li v-for="reason in reasons" :key="reason.id" class="flex items-center">
        <span class="material-icons">{{ reason.icon }}</span>
        <span class="ml-2">{{ reason.text }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps(['reasons']);
</script>

<style scoped>
.why-choose-us {
  /* İsteğe bağlı stil ayarları */
}
</style>