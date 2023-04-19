<script>
import { store } from "../store";
import MovieItem from "./MovieItem.vue"
export default {
    components: {
        MovieItem
    },
    name: "MovieList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <ul id="movie_list">
        <MovieItem :movie="movie" v-for="movie in this.store.movies" />
    </ul>
</template>


<style lang="scss" scoped></style>