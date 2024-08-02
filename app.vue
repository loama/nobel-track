<template>
  <div class="bg-white fixed -top-20 left-0 w-full h-20 z-10"></div>
  <div
    class="title fixed top-0 left-0 w-full h-12 text-center leading-[50px] bg-white text-black border-b border-zinc-300 z-20">
    Nobel Track
  </div>
  <div class="pt-12 bg-[#F3F1EF] min-h-screen">
    <NuxtPage />
  </div>
</template>

<style lang="sass">
html, body
  @apply bg-[#F3F1EF]

@font-face
  font-family: 'SourceCodePro'
  src: url('/SourceCodePro-VariableFont_wght.ttf') format('truetype')
  font-weight: 100 900
  font-style: normal


h1, h2, h3, h4, h5, h6, .title
  font-family: 'SourceCodePro', monospace
</style>
