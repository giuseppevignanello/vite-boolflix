<script>
import { store } from "../store.js"
export default {
    name: "AppMenu",
    data() {

        return {
            menu: [
                "Home",
                "Serie TV",
                "Film",
                "Originali",
                "Aggiunti di recente",
                "La mia lista"
            ],
            store
        }
    }
}
</script>

<template>
    <ul class=" list-unstyled align-items-center d-none d-lg-flex">
        <li v-for="item in this.menu" class="text-white ms-3">
            <a class="nav-link" href="#">{{ item }}</a>
        </li>
    </ul>
</template>


<style lang="scss" scoped></style>