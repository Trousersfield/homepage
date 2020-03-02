<template>
  <div id="app">
    <h1>Need to do sth here</h1>
    <main-menu/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style lang="sass">

</style>
