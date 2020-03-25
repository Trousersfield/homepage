<template>
  <div class="project-card">
    <div class="header">
      {{ project.title }}
      <div class="actions"></div>
    </div>
    <div class="content">
      {{ project.description }}
    </div>
    <div class="actions">
      Some actiooons!!
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
      something: null
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
  @apply flex flex-col m-2 border border-blue-700 p-4

  .header
    @apply font-bold mb-2

  .content
    @apply text-gray-700 mb-2

  .actions
    @apply flex flex-row flex-no-wrap justify-between
</style>
