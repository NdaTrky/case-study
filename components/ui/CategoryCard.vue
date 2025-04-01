<template>
  <div :class="[ 
    type === 'standout' ? 'w-[380px] h-[400px]' : 'w-[250px] h-[240px]',
    'mt-[6px] rounded-[20px] shadow-xl transition-transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center relative'
  ]">
    <!-- Kalp Butonu (Sadece standout için) -->
    <button v-if="type === 'standout'" class="absolute right-4 top-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10">
      <font-awesome-icon icon="fa-regular fa-heart" class="w-5 h-5 text-primary-red" />
    </button>

    <!-- Görsel Alanı -->
    <div :class="[ 
      type === 'standout' ? 'w-[280px] h-[280px] top-[20px]' : 'w-[110px] h-[110px] top-[39px] bg-[#C0B2632B]',
      'rounded-full flex items-center justify-center absolute'
    ]">
      <NuxtImg
        :src="type === 'standout' ? img : img"
        :alt="name"
        :class="[ 
          type === 'standout' ? 'w-full h-full rounded-full object-cover' : 'w-[80px] h-[52px] object-contain'
        ]"
        loading="lazy"
      />
    </div>

    <!-- İçerik -->
    <div :class="[ 
      type === 'standout' ? 'mt-[320px]' : 'mt-[160px]',
      'text-center'
    ]">
      <h3 class="text-lg font-bold text-primary-gray">{{ name }}</h3>
      <p class="text-sm text-primary-gray mt-1">{{ options }}</p>
    </div>
  </div>
</template>

<script setup>



const { $icons } = useNuxtApp();

defineProps({
  name: String,
  options: String,
  img: String,
  type: {
    type: String,
    default: 'category'
  }
});
</script>
