<template>
          <div>
            <Navbar :data="mockData.header" />  <!-- Navbar + Logo/Search -->
            <slot />  <!-- Buraya index.vue, shop.vue gibi sayfaların içeriği gelir -->
            <Footer />
          </div>
        </template>
        
        <script setup>
        import { mockData } from '~/data/data.js';
        </script>

        <!--Deepseek-->