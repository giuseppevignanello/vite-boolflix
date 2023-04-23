
<script>
import { store } from "../store.js"
import AppMenu from "./AppMenu.vue"
import AppLogo from "./AppLogo.vue"
import SearchBox from "./SearchBox.vue"
export default {
    name: "AppHeader",
    components: {
        SearchBox,
        AppLogo,
        AppMenu
    },
    data() {

        return {
            store
        }
    },
    methods: {
        searchFromAPI(APIUrl) {
            if (this.store.searchValue.trim() != "") {
                const url = APIUrl + this.store.searchValue
                this.store.callAPI(url)
            } else {
                alert("Please search something")
            }
        },
        searchCast() {
            this.store.movies.forEach(element => {
                const urlCast = this.store.API_MOVIE_CAST_BASE + element.id + "/credits?api_key=" + this.store.API_KEY
                this.store.callAPICast(urlCast)
            });

        },

    },
}
</script>

<template>
    <header id="appHeader">
        <nav class="navbar navbar-expand-lg align-items-center">
            <div class="container-fluid">
                <!-- fix ultra small layout -->
                <!-- fix btn layout -->
                <div id="leftHeader" class="d-flex align-items-center">
                    <AppLogo />
                    <AppMenu />
                </div>
                <searchBox @searchSomething="searchFromAPI(this.store.API_URL), searchCast()" />
            </div>
        </nav>
        <div class="d-flex align-items-center">
            <label class="text-white me-2" for="movies_genres">Movies Genres</label>
            <select class="form-select me-2" id="movie_genres">
                <option selected></option>
                <option v-for="genre in this.store.genres_movies" :value="genre.name">{{ genre.name }}</option>
            </select>
            <label class="text-white me-2" for="tv_genres">TV Genres</label>
            <select class="form-select me-2" id="tv_genres">
                <option selected></option>
                <option v-for="genre in this.store.genres_tv" :value="genre.name">{{ genre.name }}</option>
            </select>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>