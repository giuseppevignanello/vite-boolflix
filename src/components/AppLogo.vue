<script>
import { store } from "../store.js"
export default {
    name: "AppLogo",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="logo d-flex align-items-center">
        <img class="d-none d-md-inline-block" src="/img/logo_netflix_large.jpg" alt="">
        <img class="d-md-none negative_ms_2" src="/img/logo_netflix_small.jpg" alt="">
    </div>
</template>


<style lang="scss" scoped></style>