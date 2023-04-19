
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
      const url = this.store.API_URL_MOVIES + this.store.searchValue
      this.store.callAPI(url)
    }, 
    searchSeries(){
      const url = this.store.API_URL_SERIES + this.store.searchValue
      this.store.callAPI(url)
    }
    //CREATE FUNCTION 
  },
}
</script>

<template>
  <searchBox @searchSomething="searchMovies(), searchSeries()"/>
  <MovieList/>
</template>


<style lang="scss" scoped></style>