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
    
    <!-- Ana İçerik -->
    <div class="container mx-auto h-[770px] relative flex items-center">
      <div class="flex flex-col lg:flex-row items-center w-full">
        <!-- Sol Taraf - İçerik -->
        <div class="w-full lg:w-1/2 px-6 sm:px-10 lg:pl-16 xl:pl-24">
          <div class="transform -rotate-6 origin-left mb-2">
            <h1 class="text-[45px] sm:text-[50px] md:text-[55px] font-bold text-yellow-400 font-dancing-script">
              Super
            </h1>
          </div>
          <h2 class="text-[85px] sm:text-[95px] md:text-[105px] font-bold text-white leading-[0.9] mb-6 font-montserrat">
            DELICIOUS
          </h2>
          <NuxtImg 
            :src="hero.subtitleImage" 
            alt="ROAST TURKEY" 
            class="w-auto h-[140px] sm:h-[160px] md:h-[180px] mb-8"
            loading="lazy"
          />
          <button class="bg-transparent border-2 border-[#CBB678] text-[#CBB678] px-8 py-3 rounded-full font-bold hover:bg-[#CBB678] hover:text-white transition-all duration-300 text-lg flex items-center gap-2 w-fit">
            {{ hero.buttonText }}
            <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
          </button>
        </div>

        <!-- Sağ Taraf - Görsel -->
        <div class="w-full lg:w-1/2 flex flex-col items-end h-full justify-center">
          <div class="overflow-hidden w-full max-w-[600px] mr-0 lg:mr-12 xl:mr-24 opacity-90">
            <NuxtImg 
              :src="hero.productImage" 
              alt="Roast Turkey" 
              class="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Sosyal Medya ve İletişim (Sağ Alt Köşe) -->
      <div class="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 xl:bottom-8 xl:right-8 text-right">
        <p class="text-[#CBB678] text-xl font-bold mb-3 font-montserrat">Follow Us Now</p>
        <div class="flex justify-end gap-5 mb-4">
          <FontAwesomeIcon 
            :icon="['fab', 'facebook']" 
            class="text-[#CBB678] text-2xl hover:opacity-80 transition"
          />
          <FontAwesomeIcon 
            :icon="['fab', 'youtube']" 
            class="text-[#CBB678] text-2xl hover:opacity-80 transition"
          />
          <FontAwesomeIcon 
            :icon="['fab', 'twitter']" 
            class="text-[#CBB678] text-2xl hover:opacity-80 transition"
          />
          <FontAwesomeIcon 
            :icon="['fab', 'instagram']" 
            class="text-[#CBB678] text-2xl hover:opacity-80 transition"
          />
        </div>
        
        <div class="flex flex-col items-end text-[#CBB678] font-montserrat text-sm sm:text-base">
          <div class="flex items-center mb-1">
            <FontAwesomeIcon :icon="['fas', 'phone-alt']" class="mr-2" />
            <span>Call Us: {{ hero.phone }}</span>
          </div>
          <div class="flex items-center">
            <FontAwesomeIcon :icon="['fas', 'globe']" class="mr-2" />
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