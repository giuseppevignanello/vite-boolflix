
<script>
import { store } from "../store.js"
export default {
    name: "MovieText",
    props: {
        title: String,
        original_title: String,
        name: String,
        original_name: String
    },
    data() {


        return {
            store
        }
    }
}
</script>

<template>
    <div v-if="this.store.isMovie(this.title)">
        <h6>{{ title }}</h6>
    </div>
    <div v-else>
        <h6> {{ name }} </h6>
    </div>
</template>


<style lang="scss" scoped></style>