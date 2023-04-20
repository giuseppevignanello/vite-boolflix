
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
            clicked: false,
            store,
            starVote: Math.ceil(this.movie.vote_average / 2)
        }
    },
    methods: {
        isMovie() {
            if (this.movie.title) {
                return true
            }
        },
        change() {
           this.clicked = !this.clicked
    
        }
    }
}
</script>

<!-- prevent no photo -->
<template>
    <div @mouseleave="change( )" @mouseenter="change()" class="item col mb-3 text-white">
        <div v-show="!clicked" class="poster card">
            <img class="card-img-top" :src="this.store.generalPosterPath + movie.poster_path" alt="">
        </div>
        <div v-show="clicked" class="text card">
            <div class="card-body">
                <div v-if="isMovie()">
                    <span> Title </span>
                    <h5>{{ movie.title }}</h5>
                    <span>Orginal Title</span>
                    <h5>{{ movie.original_title }}</h5>
                </div>
                <div v-else>
                    <span>Title</span>
                    <h5> {{ movie.name }} </h5>
                    <span>Original Name</span>
                    <h5>{{ movie.original_name }}</h5>
                </div>
                <MovieLanguage :language="movie.original_language" /> <br>
                <font-awesome-icon class="text-warning" :icon="['fas', 'star']" v-for="n in starVote" />
                <font-awesome-icon class="text-warning" :icon="['far', 'star']" v-for="n in 5 - starVote" />
                <p>
                    {{ movie.overview }}
                </p>
                <h5>Cast:</h5>
                <p></p>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>