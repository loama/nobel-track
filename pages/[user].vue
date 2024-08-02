<template>
  <div class="p-4 max-w-sm mx-auto">
    <div class="opacity-60 mt-2 pl-1">
      Hello
      <span class="capitalize">{{ $route.params.user }}</span
      >, did you exercise today?
    </div>
    <div class="text-sm opacity-40 pl-1 mb-5">
      The date is {{ new Date().toISOString().split('T')[0] }}
    </div>

    <Button class="w-full mb-2 h-16 bg-gray-dark focus:bg-orange" @click="saveExercise(2)">
      Yes
      <span class="text-xl ml-2">💪🏻</span>
    </Button>
    <Button class="w-full mb-2 h-16 bg-gray-dark focus:bg-orange" @click="saveExercise(1)">
      Kinda <span class="text-xl ml-2">😐</span></Button
    >
    <Button class="w-full h-16 bg-gray-dark focus:bg-orange" @click="saveExercise(0)">
      No <span class="text-xl mr-2">🍻</span></Button
    >
  </div>
</template>

<script setup>
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore'
import { db } from '@/firebase.js'

const route = useRoute()
const router = useRouter()

async function saveExercise(value) {
  try {
    const currentDate = new Date()
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`
    const exerciseRef = doc(db, 'exercises', `${formattedDate}`)
    await setDoc(
      exerciseRef,
      {
        [route.params.user]: value,
        date: formattedDate
      },
      { merge: true }
    ) // Add merge option
    console.log('Exercise data saved successfully')

    router.push('/results')
  } catch (error) {
    console.error('Error saving exercise data:', error)
  }
}
</script>
