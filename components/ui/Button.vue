<template>
          <button
            :class="[
              'px-4 py-2 rounded-md font-medium transition duration-300 w-full sm:w-auto',
              variant === 'primary' ? 'bg-red-500 text-white hover:bg-red-600' :
              variant === 'secondary' ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : '',
            ]"
          >
            <slot />
          </button>
        </template>
        
        <script setup>
        defineProps({
          variant: {
            type: String,
            default: "primary", 
          },
        });
        </script>
        