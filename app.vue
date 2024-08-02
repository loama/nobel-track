<template>
  <div
    class="title fixed top-0 left-0 w-full h-12 text-center leading-[50px] bg-gray-dark border-b border-zinc-700 z-10">
    GYMTRACK
  </div>
  <div class="pt-12">
    <NuxtPage />
  </div>
</template>

<style lang="sass">
html, body
  @apply bg-gray-light text-white

@font-face
  font-family: 'SourceCodePro'
  src: url('/SourceCodePro-VariableFont_wght.ttf') format('truetype')
  font-weight: 100 900
  font-style: normal


h1, h2, h3, h4, h5, h6, .title
  font-family: 'SourceCodePro', monospace
</style>
