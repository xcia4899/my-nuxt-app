<template>
  <Header></Header>
  <Nabar></Nabar>
  <div class="showView">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt練習',
  description: '練習Nuxt框架的使用，並且不使用路由來製作一個簡易網站。',
  ogTitle: 'Nuxt練習',
  ogDescription: '練習Nuxt框架的使用，並且不使用路由來製作一個簡易網站。',
  keywords:'練習,學習,Nuxt3,vue3',
})
</script>

<style scoped lang="scss">
.showView{
  padding: 16px;
}
</style>
