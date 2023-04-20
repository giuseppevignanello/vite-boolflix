
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
        <h5>{{ title }}</h5>
        <span>Orginal Title</span>
        <h5>{{ original_title }}</h5>
    </div>
    <div v-else>
        <span>Title</span>
        <h5> {{ name }} </h5>
        <span>Original Name</span>
        <h5>{{ original_name }}</h5>
    </div>
</template>


<style lang="scss" scoped></style>