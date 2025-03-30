<template>
  <div>
    <Hero />
    <PopularCategories />
    <BestSellers />
    <StandoutDishes />
    <DailyDeals />
    <WhyChooseUs />
    <ShopBanner />
  </div>
</template>

<script setup>
import Hero from '@/components/home/Hero.vue'
import PopularCategories from '@/components/home/PopularCategories.vue'
import BestSellers from '~/components/home/DailyBestSellers.vue'
import StandoutDishes from '~/components/home/FeaturedDishes.vue'
import DailyDeals from '~/components/home/DealsOfTheDay.vue'
import WhyChooseUs from '@/components/home/WhyChooseUs.vue'
import ShopBanner from '@/components/home/ShopBanner.vue'
</script>
