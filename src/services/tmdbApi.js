import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

// Later combining both
// https://image.tmdb.org/t/p/w500/poster123.jpg

// API function
export const getPopularMovies = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        throw error;
    }
};

export const getMovieTrailer = async (movieId) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching trailer:", error);
        return [];
    }
};

// export const getGenres = async () => {
//     try {
//         const response = await axios.get(
//             `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
//         );

//         return response.data.genres;
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// };