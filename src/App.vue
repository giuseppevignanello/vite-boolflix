
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
    searchFromAPI(APIUrl) {
      if (this.store.searchValue.trim() != "") {
        const url = APIUrl + this.store.searchValue
        this.store.callAPI(url)
      } else {
        alert("Please search something")
      }
    }
  },
}
</script>

<template>
  <searchBox @searchSomething="searchFromAPI(this.store.API_URL_MOVIES), searchFromAPI(this.store.API_URL_SERIES)" />
  <MovieList />
</template>


<style lang="scss" scoped></style>