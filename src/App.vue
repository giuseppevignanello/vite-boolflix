
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
  mounted() {
    this.store.callAPI(this.store.API_TREND)
  },
  created() {

    const url_movies = this.store.API_GENRES_BASE + "movie/list?api_key=" + this.store.API_KEY;
    const url_tv = this.store.API_GENRES_BASE + "/tv/list?api_key=" + this.store.API_KEY
    this.store.callAPIGenresMovies(url_movies)
    console.log(url_movies)
    this.store.callAPIGenresTV(url_tv)
  }




  // }
}
</script>

<template>
  <AppHeader />
  <MovieList />
</template>


<style lang="scss" scoped></style>