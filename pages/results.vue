<template>
  <div class="p-4 max-w-sm mx-auto">
    <NuxtLink
      to="/"
      class="bg-white border border-zinc-200 rounded-[32px] mb-4 py-2 px-4 text-sm text-zinc-500"
      >← Back</NuxtLink
    >

    <h2 class="text-xl mt-8">Results</h2>
    <div class="mt-2 bg-white border border-zinc-200 rounded-[32px] mb-4 h-[56px] flex">
      <div class="bg-zinc-300 h-12 w-12 rounded-full m-1 text-center text-2xl pt-2">🧑🏻‍🦲</div>
      <div class="ml-2">
        <div class="text-xs opacity-60 mt-1">EDU</div>
        <div class="text-2xl">{{ totalEdu }} points</div>
      </div>
    </div>

    <div class="mt-2 bg-white border border-zinc-200 rounded-[32px] mb-4 h-[56px] flex">
      <div class="bg-zinc-300 h-12 w-12 rounded-full m-1 text-center text-2xl pt-2">👩</div>
      <div class="ml-2">
        <div class="text-xs opacity-60 mt-1">FER</div>
        <div class="text-2xl">{{ totalFer }} points</div>
      </div>
    </div>

    <h2 class="mt-12 text-xl mb-2">Journal Data</h2>
    <div
      class="bg-white border border-zinc-200 rounded-md p-3 mb-3"
      v-for="item in sortedData"
      :key="item.date">
      <div class="font-bold">{{ item.date }}</div>
      <hr class="my-2" />

      <div v-if="item.edu">
        <div class="mt-4">Edu - {{ item.edu?.points }}</div>
        <div
          class="text-sm opacity-60 mt-0.5"
          v-html="item.edu?.details.replace(/\\n/g, '<br>')"></div>
      </div>
      <div v-else class="mt-5">Edu hasn't recorded any points for this day.</div>

      <div v-if="item.fer">
        <div class="mt-4">Fer - {{ item.fer?.points }}</div>
        <div
          class="text-sm opacity-60 mt-0.5"
          v-html="item.fer?.details.replace(/\\n/g, '<br>')"></div>
      </div>

      <div v-else class="mt-6 opacity-60 text-sm">Fer hasn't recorded any points for this day.</div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase.js'
import { ref, onMounted, computed } from 'vue'

const data = ref([])

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => new Date(b.date) - new Date(a.date))
})

const totalEdu = computed(() => {
  return data.value.reduce((sum, item) => sum + (Number(item.edu?.points) || 0), 0)
})

const totalFer = computed(() => {
  return data.value.reduce((sum, item) => sum + (Number(item.fer?.points) || 0), 0)
})

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'journal'))
    data.value = querySnapshot.docs.map((doc) => ({
      name: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    console.error('Error fetching exercises:', error)
  }
})
</script>
