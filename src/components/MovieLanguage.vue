
<script>
import { store } from "../store";
export default {
    name: "MovieLanguage",
    data() {

        return {
            store
        }
    }
}
</script>

<template>
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
</template>


<style lang="scss" scoped></style>