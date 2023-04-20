
<script>
import { store } from "../store.js"
import SearchBox from "./SearchBox.vue"
export default {
    name: "AppHeader",
    components: {
        SearchBox
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
        }
    },
}
</script>

<template>
    <header id="appHeader">
        <nav class="navbar navbar-expand-lg align-items-center">
            <div class="container-fluid">
                <!-- fix ultra small layout -->
                <!-- fix btn layout -->
                <div class="logo d-flex align-items-center">
                    <img class="d-none d-md-inline-block" src="/img/logo_netflix_large.jpg" alt="">
                    <img class="d-md-none negative_ms_2" src="/img/logo_netflix_small.jpg" alt="">
                </div>
                <searchBox @searchSomething="searchFromAPI(this.store.API_URL)" />
             
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>