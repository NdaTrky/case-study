
<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  buttonText: String,
  ımg: String
});
</script>

<template>
  <div
    class="relative bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-black text-center"
    :style="{ ımg: `url(${ımg})` }"
  >
    <h2 class="text-3xl font-bold">{{ subtitle }}</h2>
    <h1 class="text-5xl font-extrabold">{{ title }}</h1>
    <p class="mt-4 max-w-lg">{{ description }}</p>
    <button class="mt-6 bg-yellow-500 px-6 py-2 rounded-lg text-lg font-semibold">
      {{ buttonText }}
    </button>
  </div>
</template>
