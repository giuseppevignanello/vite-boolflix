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
            <div class="row mx-5 mx-sm-0 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                <MovieItem :movie="movie" v-for="movie in this.store.movies" />
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>