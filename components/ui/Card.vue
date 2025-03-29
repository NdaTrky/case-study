<template>
  <div class="w-[250px] h-[240px] mt-[6px] rounded-[20px] shadow-xl transition-transform hover:scale-105 cursor-pointer  flex flex-col items-center justify-center relative">
    <!-- Yuvarlak Arka Plan -->
    <div class="w-[110px] h-[110px] rounded-full bg-primary-gray flex items-center justify-center absolute top-[39px]">
      <NuxtImg
        :src="img"
        :alt="name"
        class="w-[80px] h-[52px] object-contain" 
        loading="lazy"
      />
    </div> 
    
    <!-- İçerik -->
    <div class="mt-[160px] text-center">
      <h3 class="text-lg font-bold text-primary-gray">{{ name }}</h3>
      <p class="text-sm text-primary-gray mt-1">{{ options }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  options: String,
  img: String
})
</script>