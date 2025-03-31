<template>
          <section class="container mx-auto px-8 sm:px-12 py-20 md:py-28 lg:py-32">
            <div class="flex flex-col lg:flex-row items-stretch gap-12 xl:gap-16">
              
              <!-- Sol Taraf - Görsel -->
              <div class="w-full lg:w-[578px] h-[526px]">
                <img 
                  src="/images/whychoose-us.png" 
                  alt="Why Choose Us" 
                  class="w-full h-full object-cover rounded-[29px] shadow-lg"
                  loading="lazy"
                >
              </div>
        
              <!-- Sağ Taraf - Kartlar ve Başlık -->
              <div class="w-full lg:flex-1 flex flex-col justify-center space-y-10">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {{ whyChooseUs.title }}
                </h2>
        
                <div class="flex flex-col space-y-8">
                  <div 
                    v-for="feature in whyChooseUs.features" 
                    :key="feature.id" 
                    class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex gap-6 items-start"
                  >
                    <!-- İkon - Yuvarlak ve Gölgeli -->
                    <div class="p-4 bg-white shadow-md rounded-full flex items-center justify-center">
                      <FontAwesomeIcon 
                        :icon="['fas', feature.icon]" 
                        class="text-yellow-400 text-3xl" 
                      />
                    </div>
        
                    <!-- İçerik -->
                    <div>
                      <h3 class="text-lg font-semibold text-gray-900 mb-2">
                        {{ feature.title }}
                      </h3>
                      <p class="text-gray-600">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          </section>
        </template>
        
        <script setup>
        import { mockData } from '~/data/data.js';
        import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
        
        const whyChooseUs = mockData.whyChooseUs;
        </script>
        