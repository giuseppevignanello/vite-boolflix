
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
    <div>
        <input type="text" v-model="this.store.searchValue" @keyup.enter="$emit('searchSomething')">
        <button @click="$emit('searchSomething')"  > Click </button>
    </div>
</template >

 <style lang="scss" scoped></style>
