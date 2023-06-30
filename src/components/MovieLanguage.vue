
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
            flagPath: "../../public/img/",
            languages: [
                "it",
                "en",
                "fr",
                "ja",
                "es",
                "ko",
                "de",
                "hi",
                "ar"
            ],
        }
    }
}
</script>

<template>
    <div class="flag" v-if="this.languages.includes(language)">
        <img :src="flagPath + language + '.png'" alt="">
    </div>
    <div v-else>
        {{ language }}
    </div>
</template>


<style lang="scss" scoped></style>