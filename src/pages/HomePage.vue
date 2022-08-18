<template>
  <div class="container">

    <div class="row">
      <div class="col-md-10 m-auto my-3">
        <ProjectForm />
      </div>
      <div class="col-md-10" v-for="p in projects" :key="p.id">
        <ProjectCard :project="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { projectsService } from '../services/ProjectsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {

    async function getProjects() {
      try {
        await projectsService.getProjects()
      } catch (error) {
        logger.error('Getting Projects', error)
        Pop.error(error)
      }
    }

    onMounted(() => {
      getProjects()
    })

    return {
      projects: computed(() => AppState.projects)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
