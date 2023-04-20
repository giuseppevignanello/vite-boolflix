
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
    <div class="d-flex">
        <input class="form-control" aria-label=".form-control-lg example" type="text" v-model="this.store.searchValue" @keyup.enter="$emit('searchSomething')" >
        <button class="btn" @click="$emit('searchSomething')" > Click </button>
    </div>
</template >

 <style lang="scss" scoped></style>
