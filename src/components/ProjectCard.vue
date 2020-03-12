<template>
  <div class="project-card">
    <div class="header">
      {{ project.name }}
      <div class="actions"></div>
    </div>
    <div class="content">
      {{ project.description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {

    }
  },
  beforeMount () {
    console.log('project: ', this.project)
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.project-card
  @apply 
</style>
