<template>
  <div class="top-menu">
    <div><router-link to="/">Home</router-link></div>
    <div><router-link to="/cv">Lebenslauf</router-link></div>
    <div><router-link to="/projects">Projekte</router-link></div>
    <div><router-link to="/playground">Spielplatz</router-link></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.top-menu
  @apply flex flex-row tracking-wide

  >div
    @apply bg-gray-100 p-4

.router-link-exact-active
  @apply text-blue-600
</style>
