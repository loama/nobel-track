<template>
  <div class="p-4 max-w-sm mx-auto">
    <NuxtLink to="/" class="bg-gray-dark rounded-[32px] mb-4 py-2 px-4 text-sm text-zinc-500"
      >← Back</NuxtLink
    >

    <h2 class="text-xl mt-8">Results</h2>
    <div class="mt-2 bg-gray-dark rounded-[32px] mb-4 h-[56px] flex">
      <div class="bg-gray-light h-12 w-12 rounded-full m-1 text-center text-2xl pt-2">🧑🏻‍🦲</div>
      <div class="ml-2">
        <div class="text-xs opacity-60 mt-1">EDU</div>
        <div class="text-2xl">{{ totalEdu }} points</div>
      </div>
    </div>

    <div class="mt-2 bg-gray-dark rounded-[32px] mb-4 h-[56px] flex">
      <div class="bg-gray-light h-12 w-12 rounded-full m-1 text-center text-2xl pt-2">👩</div>
      <div class="ml-2">
        <div class="text-xs opacity-60 mt-1">FER</div>
        <div class="text-2xl">{{ totalFer }} points</div>
      </div>
    </div>

    <h2 class="mt-12 text-xl">Exercise Data</h2>
    <table class="mt-4 w-full">
      <thead class="bg-gray-dark">
        <tr class="border border-zinc-700">
          <th class="border-r border-zinc-700 px-4 py-2 text-left">Date</th>
          <th class="border-r border-zinc-700 px-4 py-2">Edu</th>
          <th class="px-4 py-2">Fer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedData" :key="item.date" class="border border-zinc-700">
          <td class="border-r border-zinc-700 px-4 py-2">{{ item.date }}</td>
          <td class="border-r border-zinc-700 px-4 py-2 text-right">{{ item.edu || 0 }}</td>
          <td class="px-4 py-2 text-right">{{ item.fer || 0 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase.js'
import { ref, onMounted, computed } from 'vue'

const data = ref([])

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => new Date(a.date) - new Date(b.date))
})

const totalEdu = computed(() => {
  return data.value.reduce((sum, item) => sum + (Number(item.edu) || 0), 0)
})

const totalFer = computed(() => {
  return data.value.reduce((sum, item) => sum + (Number(item.fer) || 0), 0)
})

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'exercises'))
    data.value = querySnapshot.docs.map((doc) => ({
      name: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    console.error('Error fetching exercises:', error)
  }
})
</script>
