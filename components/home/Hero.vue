<template>
  <section class="relative w-full">
    <!-- Background Image -->
    <div class="absolute inset-0 w-full h-[770px]">
      <NuxtImg 
        :src="hero.backgroundImage" 
        alt="Background" 
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    
    <!-- Main Content -->
    <div class="container mx-auto h-[770px] relative flex items-center">
      <div class="flex flex-col lg:flex-row items-center w-full">
        <!-- Left Side - Content -->
        <div class="w-full lg:w-1/2 px-6 sm:px-10 lg:pl-16 xl:pl-24">
          <div class="transform -rotate-6 origin-left mb-1">
            <h1 class="text-[18px] font-bold text-yellow-400 font-montserrat">
              {{ hero.titlePart1 }}
            </h1>
          </div>
          <h2 class="font-bold text-[40px] text-white leading-[0.9] mb-4 font-montserrat">
            {{ hero.titlePart2 }}
          </h2>
          <NuxtImg 
            :src="hero.subtitleImage" 
            :alt="hero.subtitleAlt" 
            class="w-auto h-[200px] sm:h-[220px] md:h-[240px] mb-6"
            loading="lazy"
          />
          <button class="bg-transparent border-2 border-[#CBB678] text-[#CBB678] px-6 py-2 rounded-full font-bold hover:bg-[#CBB678] hover:text-white transition-all duration-300 text-base flex items-center gap-2 w-fit">
            {{ hero.buttonText }}
            <FontAwesomeIcon :icon="hero.buttonIcon" />
          </button>
        </div>

        <!-- Right Side - Image -->
        <div class="w-full lg:w-1/2 flex flex-col items-end h-full justify-center">
          <div class="overflow-hidden w-full max-w-[500px] mr-0 lg:mr-12 xl:mr-24 opacity-90">
            <NuxtImg 
              :src="hero.productImage" 
              :alt="hero.productAlt" 
              class="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Social Media and Contact (Bottom Right Corner) -->
      <div class="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 xl:bottom-8 xl:right-8 text-right">
        <p class="text-[#CBB678] text-sm font-bold mb-2 font-montserrat">{{ hero.socialTitle }}</p>
        <div class="flex justify-end gap-3 mb-3">
          <div 
            v-for="(social, index) in hero.socialIcons" 
            :key="index"
            class="w-8 h-8 bg-[#FFF6DC] flex items-center justify-center rounded-full hover:opacity-80 transition">
            <FontAwesomeIcon :icon="social.icon" class="text-black text-lg" />
          </div>
        </div>
        
        <div class="flex flex-col items-end text-[#CBB678] font-montserrat text-xs sm:text-sm">
          <div class="flex items-center mb-1">
            <FontAwesomeIcon :icon="hero.contactIcons.phone" class="mr-2 text-sm" />
            <span>{{ hero.phoneText }}: {{ hero.phone }}</span>
          </div>
          <div class="flex items-center">
            <FontAwesomeIcon :icon="hero.contactIcons.website" class="mr-2 text-sm" />
            <a :href="`https://${hero.website}`" class="underline">
              {{ hero.website }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mockData } from '~/data/data.js';
const hero = mockData.hero;
</script>