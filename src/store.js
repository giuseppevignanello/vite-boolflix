import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
    loading: true,
    searchValue: "",
    movies: null,
    API_URL: "https://api.themoviedb.org/3/search/movie?api_key=85f7fb5ef1ff1562662336a11a351b9b",
    callAPI(url) {
      axios 
        .get(url)
        .then(response => {
            this.loading = false
         
        })
        .catch(error => {
                    console.log(error);
                    console.error(error.message);
                })
                
    }, 
  })