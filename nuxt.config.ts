// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //開啟ssr 服務端  默認開啟
  ssr:true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  //vant應用
  modules: ['@vant/nuxt'],
})
