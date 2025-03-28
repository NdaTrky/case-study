<!-- ~/layouts/default.vue -->
<template>
  <div>
    <Navbar :data="mockData.header" /> 
    <slot /> 
    <Footer />
  </div>
</template>

<script setup>
import { mockData } from '~/data/data.js';
import Navbar from '~/components/layout/Navbar.vue';
import Footer from '~/components/layout/Footer.vue';

</script>