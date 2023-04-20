
<script>
import { store } from './store.js';
import AppHeader from "./components/AppHeader.vue"
import MovieList from "./components/MovieList.vue"
export default {
  components: {
    MovieList, 
    AppHeader
  },
  data() {

    return {
      store
    }
  },
}
</script>

<template>
  <AppHeader/>
  <MovieList />
</template>


<style lang="scss" scoped></style>