
<script>
export default {
    name: "MovieItem",
    props: {
        movie: Object
    },
    data() {


        return {}
    }
}
</script>

<template>
    <li>
        <ul>
            <li>{{ movie.title }}</li>
            <li> {{ movie.original_title }}</li>
            <li> {{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>

        </ul>
    </li>
</template>


<style lang="scss" scoped></style>