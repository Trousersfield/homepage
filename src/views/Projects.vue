<template>
  <div>
    <div>Short overview for selected project.
      Visit my github for more information</div>
    <div class="project-grid">
      <project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  components: { ProjectCard },
  data: () => {
    return {
      projects: [{
        id: 0,
        title: 'first project',
        description: 'Nothing has been done here yet'
      }, {
        id: 1,
        title: 'second project',
        description: 'Nothing has been done here yet'
      }, {
        id: 2,
        title: 'third project',
        description: 'Nothing has been done here yet'
      }, {
        id: 3,
        title: 'fourth project',
        description: 'Nothing has been done here yet'
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
.project-grid
  @apply grid gap-4

@screen sm
  .project-grid
    @apply grid-cols-1

@screen md
  .project-grid
    @apply grid-cols-2

@screen lg
  .project-grid
    @apply grid-cols-3

@screen xl
  .project-grid
    @apply grid-cols-4
</style>
