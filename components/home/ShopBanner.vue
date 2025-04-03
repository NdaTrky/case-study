<template>
  <section class="container mx-auto px-6 sm:px-10 py-16 md:py-24">
    <!-- Üst Kısım (Background Image ile) -->
    <div class="relative mb-16">
      <!-- Background Image -->
      <div class="absolute inset-0 overflow-hidden rounded-md">
        <NuxtImg 
          :src="shopBanner.backgroundImage" 
          alt="Background" 
          class="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>

      <!-- Ana İçerik -->
      <div class="flex flex-col lg:flex-row-reverse items-center gap-8 xl:gap-12 relative py-10 px-6 sm:px-10">
        <!-- Sağ Taraf - Görsel -->
        <div class="overflow-hidden object-cover">
          <NuxtImg 
            :src="shopBanner.personImage" 
            alt="Person shopping" 
            class="w-full h-full object-cover"
            loading="lazy"
            sizes="sm:100vw md:50vw lg:578px"
          />
        </div>

        <!-- Sol Taraf - İçerik -->
        <div class="w-full lg:flex-1">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {{ shopBanner.title }}
          </h1>
          <p class="text-lg text-gray-400 mb-8">
            {{ shopBanner.subtitle }}
            <span class="text-green-500 font-semibold">Nest Mart</span>
          </p>

          <!-- Email Abonelik Alanı -->
          <div class="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md max-w-lg mb-12">
            <FontAwesomeIcon 
              :icon = "['fas', 'paper-plane']"
              class="text-gray-400 text-lg mr-3"
            />
            <input 
              type="email" 
              :placeholder="shopBanner.placeholder" 
              class="flex-grow bg-transparent focus:outline-none text-sm"
            >
            <button 
              class="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition"
            >
              {{ shopBanner.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Özellik Kartları -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 rounded-xl shadow-lg mt-8 bg-gray-100 overflow-hidden">
      <div 
        v-for="feature in shopBanner.features" 
        :key="feature.id" 
        class="flex items-center gap-4 p-6 border border-gray-200 border-opacity-50 last:border-r-0"
      >
        <NuxtImg 
          :src="`/images/shopbanner-icon${feature.id}.png`" 
          :alt="feature.title"
          class="w-8 h-8 object-contain"
        />
        <div>
          <h3 class="font-semibold text-gray-900 text-sm md:text-base">
            {{ feature.title }}
          </h3>
          <p class="text-gray-500 text-xs mt-1">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mockData } from '~/data/data.js'
const shopBanner = mockData.shopBanner
</script>
