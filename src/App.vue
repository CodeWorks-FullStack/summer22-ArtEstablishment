<template>
  <div class="left-bar bg-dark text-center">
    <div class="d-flex flex-column align-items-center justify-content-between h-100">

      <router-link :to="{ name: 'Home' }" class="text-success lighten-30 pt-5 mb-3">
        <b>Art Establishment</b>
      </router-link>

      <Login class="pt-3" />
    </div>
  </div>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.left-bar {
  height: 100vh;
  width: 200px;
}

main {
  max-height: 100vh;
  overflow-y: auto;
  padding-bottom: 5rem;

}
</style>
