
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
                <searchBox @searchSomething="searchFromAPI(this.store.API_URL)" />
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>