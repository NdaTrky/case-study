<template>
  <section 
    class="relative bg-cover bg-center h-[600px] flex items-center px-6 md:px-12"
    :style="{ backgroundImage: `url('${data.backgroundImage}')` }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- İçerik -->
    <div class="container mx-auto relative z-10 text-white flex flex-col md:flex-row items-center justify-between">
      <!-- Sol Kısım (Yazılar ve Butonlar) -->
      <div class="max-w-lg">
        <p class="text-lg italic text-yellow-400">Super Delicious</p>
        <h1 class="text-6xl font-bold mb-6 uppercase tracking-wide">
          <span class="relative inline-block">
            <span class="absolute inset-0 bg-yellow-600 opacity-70 skew-x-[-10deg] -z-10"></span>
            ROAST TURKEY
          </span>
        </h1>

        <!-- Sipariş Butonu -->
        <NuxtLink 
          :to="data.ctaButton.path"
          class="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all"
        >
          <component :is="$icons.arrowRight" class="w-6 h-6 order-first" />
          {{ data.ctaButton.text }}
        </NuxtLink>
      </div>

      <!-- Sağ Kısım (Görseller) -->
      <div class="relative">
        <NuxtImg 
          :src="data.heroImg" 
          alt="Roast Turkey" 
          class="w-[500px] opacity-80 blur-sm drop-shadow-lg rounded-lg"
        />
      </div>
    </div>

    <!-- Sosyal Medya ve Alt Bilgi -->
    <div class="absolute bottom-6 right-6 text-white text-sm opacity-90">
      <p class="mb-1">{{ data.description }}</p>
      <div class="flex gap-4">
        <component :is="$icons.facebook" class="w-5 h-5 cursor-pointer hover:text-yellow-400 transition" />
        <component :is="$icons.twitter" class="w-5 h-5 cursor-pointer hover:text-yellow-400 transition" />
        <component :is="$icons.instagram" class="w-5 h-5 cursor-pointer hover:text-yellow-400 transition" />
      </div>
      <p class="mt-3 font-semibold">{{ data.contact.label }} {{ data.contact.phone }}</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Selficious ROAST TURKEY',
      ctaButton: {
        text: 'Order Now',
        path: '/order'
      },
      description: 'Follow Us Now',
      contact: {
        phone: '628-7864-9634',
        label: 'Call Us:'
      },
      backgroundImage: '/images/hero-bg.jpg',
      heroImg: '/images/hero-image.jpg'
    })
  }
});

const { $icons } = useNuxtApp();
</script>

<style scoped>
section {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
