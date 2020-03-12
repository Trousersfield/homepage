<template>
  <div>
    <div>Here should be my projects, refer to Github</div>
    <project-card
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  components: { ProjectCard },
  data: () => {
    return {
      projects: [
        { id: 0, name: 'first project' , desciption: 'Nothing has been done here yet' },
        { id: 1, name: 'second project' , desciption: 'Nothing has been done here yet' }
      ]
    }
  }
}
</script>
