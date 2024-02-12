<script setup lang="ts">
useHead({
  title: 'Acme',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: 'description',
      content: 'Acme is a company that provides a wide range of services.'
    },
    {
      name: 'keywords',
      content: 'Acme, services, company'
    },
  ]
})
</script>

<template>
  <div class="wrapper">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<style scoped lang="css">
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
