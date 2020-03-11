<template>
  <div id="app">
    <top-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'

export default {
  name: 'App',
  components: {
    TopMenu
  }
}
</script>

<style lang="sass">

</style>
