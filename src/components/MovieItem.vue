
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
            <li :v-if="movie.original_language == 'it'">
                    <img src="../assets/img/flag_italy.png" alt="">
            </li>
            <li :v-else-if="movie.original_language == 'en'">
                <img src="../assets/img/flag_us.png" alt="">
                <img src="../assets/img/flag_uk.png" alt="">
            </li>
            <li :v-else-if="movie.original_language == 'fr'">
                <img src="../assets/img/flag_france.png" alt="">
            </li>
            <li>{{ movie.vote_average }}</li>

        </ul>
    </li>
</template>


<style lang="scss" scoped></style>