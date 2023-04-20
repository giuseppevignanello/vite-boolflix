import { reactive } from 'vue'
import axios from "axios"

export const store = reactive({
    generalPosterPath: "https://image.tmdb.org/t/p/w342",
    loading: true,
    searchValue: "",
    movies: null,
    genres_movies: null,
    genres_tv: null,
    API_KEY: "85f7fb5ef1ff1562662336a11a351b9b",
    API_GENRES_BASE: "https://api.themoviedb.org/3/genre/",
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
     callAPIGenresMovies(url) {
        axios
            .get(url)
            .then(response => {
                this.loading = false,
                    this.genres_movies = response.data.genres
            })
            .catch(error => {
                console.log(error);
                console.error(error.message);
            })
    }, 
    callAPIGenresTV(url) {
        axios
            .get(url)
            .then(response => {
                this.loading = false,
                    this.genres_tv = response.data.genres
            })
            .catch(error => {
                console.log(error);
                console.error(error.message);
            })
    }, 
    isMovie(title) {
        if(title) {
        return true}
    },
    
    
   
   
})