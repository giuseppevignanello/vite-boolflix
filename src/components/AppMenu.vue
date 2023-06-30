<script>
import { store } from "../store.js"
export default {
    name: "AppMenu",
    data() {

        return {
            menu: [
                "Serie TV",
                "Film",
                "Originali",
                "Aggiunti di recente",
                "La mia lista"
            ],
            store
        }
    },
    methods: {
        returnToTrend() {
            this.store.callAPI(this.store.API_TREND)
        }
    }
}
</script>

<template>
    <ul class=" list-unstyled align-items-center d-none d-lg-flex">
        <li @click="returnToTrend()" class="text-white ms-3">
            <a class="nav-link" href="#">Home</a>
        </li>
        <li v-for="item in this.menu" class="text-white ms-3">
            <a class="nav-link" href="#">{{ item }}</a>
        </li>
    </ul>
</template>


<style lang="scss" scoped></style>