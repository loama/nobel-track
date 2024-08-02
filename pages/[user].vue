<template>
  <div class="p-4 max-w-sm mx-auto">
    <div class="opacity-60 mt-2 pl-1">
      Hello
      <span class="capitalize">{{ $route.params.user }}</span
      >, did you do everything in your hands today to advance your career?
    </div>
    <div class="text-sm opacity-40 pl-1 mb-5">
      The date is {{ new Date().toISOString().split('T')[0] }}
    </div>

    <Button
      class="w-full mb-2 h-16 bg-white border border-zinc-200 shadow-none text-zinc-800"
      @click="points = 2"
      v-bind:class="{
        'bg-zinc-200 border-black text-black hover:bg-zinc-200': points === 2,
        'hover:bg-zinc-100': points !== 2
      }">
      Yes
      <span class="text-xl ml-2"><img class="h-7" src="/favicon.png" /></span>
    </Button>
    <Button
      class="w-full mb-2 h-16 bg-white border border-zinc-200 shadow-none text-zinc-800"
      @click="points = 1"
      v-bind:class="{
        'bg-zinc-200 border-black text-black hover:bg-zinc-200': points === 1,
        'hover:bg-zinc-100': points !== 1
      }">
      Kinda <span class="text-xl ml-2">😐</span></Button
    >
    <Button
      class="w-full mb-2 h-16 bg-white border border-zinc-200 shadow-none text-zinc-800"
      @click="points = 0"
      v-bind:class="{
        'bg-zinc-200 border-black text-black hover:bg-zinc-200': points === 0,
        'hover:bg-zinc-100': points !== 0
      }">
      No <span class="text-xl mr-2">🍻</span></Button
    >

    <div class="mt-8">Why?</div>
    <div class="text-sm opacity-40 pl-1 mb-5">Explain yourself, give us some details</div>

    <textarea
      class="rounded-md w-full h-24 bg-white border border-zinc-200 shadow-none text-zinc-800 focus:border-zinc-400 hover:bg-zinc-100 resize-none outline-none p-3 h-32"
      v-model="details"></textarea>

    <Button
      class="w-full mt-4 h-16 bg-black border border-zinc-200 shadow-none text-zinc-800 focus:bg-zinc-500 text-white hover:bg-zinc-800"
      v-on:click="save()">
      Save & see results
    </Button>
  </div>
</template>

<script setup>
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase.js'

const route = useRoute()
const router = useRouter()
const points = ref(0)
const details = ref('')

async function save() {
  try {
    const currentDate = new Date()
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`
    const journalRef = doc(db, 'journal', `${formattedDate}`)
    await setDoc(
      journalRef,
      {
        date: formattedDate,
        [route.params.user]: {
          details: details.value.replace(/\n/g, '\\n'), // Preserve line breaks
          points: points.value
        }
      },
      { merge: true }
    )
    console.log('Exercise data saved successfully')

    router.push('/results')
  } catch (error) {
    console.error('Error saving exercise data:', error)
  }
}
</script>
