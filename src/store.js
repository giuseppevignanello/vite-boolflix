import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
    generalPosterPath: "https://image.tmdb.org/t/p/w342",
    loading: true,
    searchValue: "",
    movies: null,
    genres: [],
    API_GENRES: "https://api.themoviedb.org/3/genre/movie/list?api_key=85f7fb5ef1ff1562662336a11a351b9b",
    API_URL: "https://api.themoviedb.org/3/search/multi?api_key=85f7fb5ef1ff1562662336a11a351b9b&query=",
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
     callAPIGenres(url) {
        axios
            .get(url)
            .then(response => {
                this.loading = false,
                    this.genres = response.data.results
            })
            .catch(error => {
                console.log(error);
                console.error(error.message);
            })

    },
   
   
})