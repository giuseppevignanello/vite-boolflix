
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
            click: false,
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
           this.click = !this.click
            // textEl.classList.remove("d-none")
        }
    }
}
</script>

<template>
    <div @mouseleave="change( )" @mouseenter="change()" class="item col mb-3">
        <div v-show="!click" class="poster card">
            <img class="card-img-top" :src="this.store.generalPosterPath + movie.poster_path" alt="">
        </div>
        <div v-show="click" class="text card">
            <div class="card-body">
                <div v-if="isMovie()">
                    <h5> Title </h5>
                    <span>{{ movie.title }}</span>
                    <h5>Orginal Title</h5>
                    <span>{{ movie.original_title }}</span>
                </div>
                <div v-else>
                    <h5>Title</h5>
                    <span> {{ movie.name }} </span>
                    <h5>Original Name</h5>
                    <span>{{ movie.original_name }}</span>
                </div>
                <MovieLanguage :language="movie.original_language" /> <br>
                <font-awesome-icon :icon="['fas', 'star']" v-for="n in starVote" />
                <font-awesome-icon :icon="['far', 'star']" v-for="n in 5 - starVote" />
                <p>
                    {{ movie.overview }}
                </p>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>