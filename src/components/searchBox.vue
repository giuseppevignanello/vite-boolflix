
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
    <div class="mw_70 d-flex align-items-center">
        <font-awesome-icon class="text-white fa-xl me-2" icon="bell" />
        <input class="form-control me-2" aria-label=".form-control-lg example" type="text" v-model="this.store.searchValue"
            @keyup.enter="$emit('searchSomething')">
        <button class="btn bg_logo_color text-white" @click="$emit('searchSomething')"> Click</button>
    </div>
</template >

<style lang="scss" scoped></style>
