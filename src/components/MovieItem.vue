
<script>
import { store } from "../store";
import MovieLanguage from "./MovieLanguage.vue"
export default {
    components: {
        MovieLanguage
    },
    name: "MovieItem",
    props: {
        movie: Object
    },
    data() {


        return {
            store
        }
    }
}
</script>

<template>
    <li>
        <ul>
            <li>{{ movie.title }}</li>
            <li> {{ movie.original_title }}</li>
            <MovieLanguage :movie="movie"/>
            <li>{{ movie.vote_average }}</li>

        </ul>
    </li>
</template>


<style lang="scss" scoped></style>