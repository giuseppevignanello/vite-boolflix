
<script>
import { store } from "../store";
export default {
    name: "MovieLanguage",
    props: {
        language: String
    },
    data() {
        return {
            store,
            flagPath: "../../public/img/"
        }
    }
}
</script>

<template>
    <li class="flag" v-if="this.store.languages.includes(language)">
        <img :src="flagPath+language+'.png'" alt="">
    </li>
    <li v-else>
        {{language}}
    </li>
</template>


<style lang="scss" scoped></style>