
<script>
import { store } from './store.js';
export default {
  data () {
    
    return {
      store
    }
  }, 
  mounted() {
        this.store.callAPI(this.store.API_URL + this.store.searchValue)

    }
}
</script>

<template>
  <div>
    <input type="text" v-model="this.store.searchValue">
    <button>Click</button>
  </div>
</template>


<style lang="scss" scoped>

</style>