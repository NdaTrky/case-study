<template>
  <section class="relative w-full h-[800px] overflow-hidden">
    <!-- Arka plan görseli - GÜNCELLENDİ -->
    <div class="absolute inset-0 w-full h-full z-0">
      <div 
        v-if="heroData?.bgImage"
        class="absolute inset-0 w-full h-full"
        :style="{
          backgroundImage: `url('${useAsset(heroData.bgImage)}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }"
      >
        <div class="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </div>
    </div>

    <!-- Dekorasyon görselleri (biberler) -->
    <NuxtImg 
      v-if="heroData?.decorationImage"
      :src="useAsset(heroData.decorationImage)" 
      alt="Decoration"
      class="absolute w-[203px] h-[283px] top-[-43px] left-[-39px] z-10"
      format="webp"
      quality="80"
      loading="eager"
    />
    <NuxtImg 
      v-if="heroData?.decorationImage"
      :src="useAsset(heroData.decorationImage)" 
      alt="Decoration"
      class="absolute w-[203px] h-[283px] bottom-0 right-0 z-10 rotate-180"
      format="webp"
      quality="80"
      loading="eager"
    />

    <!-- İçerik container'ı -->
    <div class="relative z-20 h-full flex flex-col justify-between px-8 py-12 md:px-16 lg:px-24">
      <!-- Üst kısım - Başlık -->
      <div class="flex-1 flex items-center">
        <NuxtImg 
          v-if="heroData?.titleImage"
          :src="useAsset(heroData.titleImage)" 
          alt="Super Delicious Roast Turkey"
          class="w-full md:w-4/5 lg:w-2/3 max-w-3xl"
          format="webp"
          quality="90"
          loading="eager"
        />
      </div>

      <!-- Alt kısım - Bilgiler -->
      <div class="flex flex-col md:flex-row justify-between items-end space-y-4 md:space-y-0">
        <!-- Buton -->
        <button class=" text-primary-contact px-8 py-3 rounded-full font-bold text-lg  border-primary-contact transition">
        Order Now
        </button>

        <!-- Sağ alt köşe içeriği -->
        <div class="flex flex-col items-end space-y-2 text-primary-contact font-montserrat">
          <!-- Follow Us Now ve ikonlar -->
          <div class="flex flex-col items-end space-y-2">
            <span class="font-semibold">Follow Us Now</span>
            <div class="flex space-x-2">
              <div 
                v-for="(item, index) in heroData?.icons || []" 
                :key="index" 
                class="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center"
              >
                <FontAwesomeIcon 
                  :icon="item.icon" 
                  class="w-4 h-4 text-primary-social"
                />
              </div>
            </div>
          </div>

          <!-- Call Us -->
          <div class="text-right">
            <div class="text-xl font-semibold">Call Us: {{ heroData?.phone || '' }}</div>
          </div>

          <!-- Website -->
          <div class="text-right text-primary-light">
            Typeyourwebsitehere
          </div>
        </div>
      </div>
    </div>

    <!-- Tavuk resmi (sağ taraf) -->
    <NuxtImg 
      v-if="heroData?.foodImage"
      :src="useAsset(heroData.foodImage)" 
      alt="Roast Turkey"
      class="absolute w-[750px] h-[750px] top-[30px] left-[1050px] z-10 opacity-15"
      format="webp"
      quality="90"
      loading="eager"
    />
  </section>
</template>

<script setup>
import { mockData } from '~/data/data'

const heroData = mockData?.heroData || {}

const useAsset = (path) => {
  return `/images/${path}`
}
</script>