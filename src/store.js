import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
    generalPosterPath: "https://image.tmdb.org/t/p/w342",
    loading: true,
    searchValue: "",
    movies: null,
    languages: [
        "it",
        "en",
        "fr" 
    ],
    API_URL_SERIES: "https://api.themoviedb.org/3/search/tv?api_key=85f7fb5ef1ff1562662336a11a351b9b&query=",
    API_URL_MOVIES: "https://api.themoviedb.org/3/search/movie?api_key=85f7fb5ef1ff1562662336a11a351b9b&query=",
    callAPI(url) {
        axios
            .get(url)
            .then(response => {
                this.loading = false,
                    this.movies = response.data.results
            })
            .catch(error => {
                console.log(error);
                console.error(error.message);
            })

    },
   
})