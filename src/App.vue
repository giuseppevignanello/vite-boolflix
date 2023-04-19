
<script>
import { store } from './store.js';
import MovieList from "./components/MovieList.vue"
import SearchBox from "./components/searchBox.vue"
export default {
  components: {
    SearchBox, 
    MovieList
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
  <MovieList/>
</template>


<style lang="scss" scoped></style>