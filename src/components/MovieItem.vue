
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
    },
    data() {


        return {
            store, 
            starVote: Math.ceil(this.movie.vote_average/2)
        }
    }, 
    methods: {
        isMovie() {
            if (this.movie.title) {
                return true 
            }
        }
    }
}
</script>

<template>
    <li>
        <!-- media function -->
        <ul>
            <li v-if="isMovie()">{{ movie.title }} <br> {{ movie.original_title }}</li>
            <li v-else>{{ movie.name }} <br> {{ movie.original_name }}</li>
            <MovieLanguage :language="movie.original_language" />
            <li>
                <i v-for="n in starVote" class="fa-solid fa-star"></i>
                <i v-for="n in (5 - starVote)" class="fa-regular fa-star"></i>
            </li>
            <li>
                <img :src="this.store.generalPosterPath + movie.poster_path" alt="">
            </li>

        </ul>
    </li>
</template>


<style lang="scss" scoped></style>