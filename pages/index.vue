<template>
  <div class="p-4 max-w-sm mx-auto">
    <div class="opacity-60 pl-1">Who are you?</div>
    <div class="text-sm opacity-40 mb-3 pl-1">Click on your name</div>

    <NuxtLink class="block w-full" to="/edu"
      ><Button
        class="w-full mb-4 h-16 bg-white border border-zinc-200 shadow-none text-zinc-800 focus:bg-zinc-700 focus:text-white hover:bg-zinc-100"
        >Edu</Button
      ></NuxtLink
    >
    <NuxtLink class="block w-full" to="/fer"
      ><Button
        class="w-full mb-4 h-16 bg-white border border-zinc-200 shadow-none text-zinc-800 focus:bg-zinc-700 focus:text-white hover:bg-zinc-100"
        >Fer</Button
      ></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
