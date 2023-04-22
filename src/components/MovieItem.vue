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
        searchCast() {
            const urlCast = this.store.API_MOVIE_CAST_BASE + this.movie.id + "/credits?api_key=" + this.store.API_KEY
            this.store.callAPICast(urlCast)
        }
    }

}

</script>

<!-- prevent no photo -->
<template>
    <div @mouseleave="change()" @mouseenter="change()" class="item col mb-3 text-white">
        <div v-show="!clicked" class="poster card">
            <img class="card-img-top" :src="this.store.generalPosterPath + movie.poster_path" alt="">
        </div>
        <div v-show="clicked" class="text card">
            <div class="card-body">
                <MovieText :title="movie.title" :original_title="movie.original_title" :name="movie.name"
                    :original_name="movie.original_name" />
                <MovieLanguage :language="movie.original_language" /> <br>
                <font-awesome-icon class="text-warning" :icon="['fas', 'star']" v-for="n in starVote" />
                <font-awesome-icon class="text-warning" :icon="['far', 'star']" v-for="n in 5 - starVote" />
                <p>
                    {{ movie.overview }}
                </p>
                <h5 @click="searchCast()">Cast:</h5>
                    <span v-for="actor in this.store.cast">{{ actor.name}}</span>
                <h5>Genre:</h5>
                <div v-if="this.store.isMovie(this.movie.title)">
                    <div v-for="item in this.store.genres_movies">
                        <div v-for="id in movie.genre_ids">
                            <span v-if="item.id == id"> {{ item.name}}</span>
                        </div>
                    </div>
                </div>
                <div v-else>
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