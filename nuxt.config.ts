// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  components: [{
    path: '~/components', 
    pathPrefix: false
  }],
  css: [
    '~/assets/css/tokens/_colors.css',
    '~/assets/css/tokens/_typography.css',
    '~/assets/css/_globals.css',
  ],
  devtools: { enabled: true },
})
