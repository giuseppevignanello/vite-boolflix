<!-- some cards are too much big -->


<script>
import { store } from "../store.js"
import MovieText from "./MovieText.vue"
import MovieLanguage from "./MovieLanguage.vue"
export default {
    components: {
        MovieLanguage,
        MovieText
    },
    name: "MovieItem",
    props: {
        movie: Object,
    },
    data() {
        return {
            clicked: false,
            store,
            starVote: Math.ceil(this.movie.vote_average / 2)
        }
    },
    methods: {
        change() {
            this.clicked = !this.clicked
        },
        getMoviePoster(movie) {
            if (movie.poster_path) {
                return this.store.generalPosterPath + movie.poster_path
            } else {
                return "../../public/img/No_Image_Available.jpg"
            }
        }
    }

}

</script>
<template>
    <div @mouseleave="change()" @mouseenter="change()" class="item col mb-3 text-white">
        <div v-show="!clicked" class="poster card h-100">
            <img class="card-img-top h-100" :src="getMoviePoster(movie)" alt="">
        </div>
        <div v-show="clicked" class="text card h-100">
            <div class="card-body">
                <MovieText :title="movie.title" :original_title="movie.original_title" :name="movie.name"
                    :original_name="movie.original_name" />
                <MovieLanguage :language="movie.original_language" /> <br>
                <font-awesome-icon class="text-warning" :icon="['fas', 'star']" v-for="n in starVote" />
                <font-awesome-icon class="text-warning" :icon="['far', 'star']" v-for="n in 5 - starVote" />
                <p id="overview">
                    {{ movie.overview }}
                </p>
                <div class="genre" v-if="this.store.isMovie(this.movie.title)">
                    <div v-for="item in this.store.genres_movies">
                        <div v-for="id in movie.genre_ids">
                            <span v-if="item.id == id"> {{ item.name }}</span>
                        </div>
                    </div>
                </div>
                <div class="genre" v-else>
                    <div v-for="item in this.store.genres_tv">
                        <div v-for="id in movie.genre_ids">
                            <span v-if="item.id == id"> {{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>