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
    <div id="movie_list">
        <div class="container my-5">
            <div class="row row-cols-3">
                <MovieItem :movie="movie" v-for="movie in this.store.movies" />
            </div>
        </div>
        
    </div>
</template>


<style lang="scss" scoped></style>