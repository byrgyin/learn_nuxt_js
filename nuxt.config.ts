// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['usebootstrap'],
  app:{
    head:{
      title:"GitHub Works",
      meta:[
        {
          name:"charset",content:"UTF-8",
        }
      ]
    }
  }
})