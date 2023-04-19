
<script>
import { store } from './store.js';
import searchBox from "./components/searchBox.vue"
export default {
  components: {
    searchBox
  },
  data() {

    return {
      store
    }
  },
  methods: {
    searchMovies() {
      const url = this.store.API_URL + this.store.searchValue
      this.store.callAPI(url)
    }
  },
}
</script>

<template>
  <searchBox @searchSomething="searchMovies()"/>
  <ul v-for="movie in this.store.movies">
    <li>{{ movie.title }}</li>
    <li> {{ movie.original_title}}</li>
    <li> {{ movie.original_language }}</li>
    <li>{{ movie.vote_average }}</li>

  </ul>
</template>


<style lang="scss" scoped></style>