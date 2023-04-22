
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
        <span> Title </span>
        <h6>{{ title }}</h6>
        <span>Orginal Title</span>
        <h6>{{ original_title }}</h6>
    </div>
    <div v-else>
        <span>Title</span>
        <h6> {{ name }} </h6>
        <span>Original Name</span>
        <h6>{{ original_name }}</h6>
    </div>
</template>


<style lang="scss" scoped></style>