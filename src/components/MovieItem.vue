
<script>
import { store } from "../store";
import MovieLanguage from "./MovieLanguage.vue"
export default {
    components: {
        MovieLanguage
    },
    name: "MovieItem",
    props: {
        movie: Object,
        series: Object,
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

        <ulF>
            <li v-if="movie.title">{{ movie.title }}</li>
            <li v-else-if="movie.name"> {{ movie.name }}</li>
            <li v-if="movie.original_title"> {{ movie.original_title }}</li>
            <li v-else-if="movie.original_name">{{ movie.original_name }} </li>

            <MovieLanguage :language="movie.original_language" />
            <li>{{ movie.vote_average }}</li>
            <li>
                <img :src="this.store.generalPosterPath + movie.poster_path" alt="">
            </li>

        </ulF>
    </li>
</template>


<style lang="scss" scoped></style>