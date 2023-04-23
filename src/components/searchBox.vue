
<script>
import { store } from '../store';
export default {
    name: "searchBox",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="d-flex align-items-center">
        <label class="text-white me-2" for="movies_genres">Movies Genres</label>
        <select class="form-select me-2" id="movie_genres">
            <option selected></option>
            <option v-for="genre in this.store.genres_movies" :value="genre.name">{{genre.name}}</option>
        </select>
        <label class="text-white me-2" for="tv_genres">TV Genres</label>
        <select class="form-select me-2" id="tv_genres">
            <option selected></option>
            <option v-for="genre in this.store.genres_tv" :value="genre.name">{{genre.name}}</option>
        </select>
        <font-awesome-icon class="text-white fa-xl me-2" icon="bell" />
        <input class="form-control" aria-label=".form-control-lg example" type="text" v-model="this.store.searchValue"
            @keyup.enter="$emit('searchSomething')">
        <button class="btn bg_logo_color text-white" @click="$emit('searchSomething')"> Click </button>
    </div>
</template >

<style lang="scss" scoped></style>
