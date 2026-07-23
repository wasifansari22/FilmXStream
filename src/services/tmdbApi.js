import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
    },
    timeout: 10000,
});

const ENDPOINTS = {
    POPULAR: "/movie/popular",
    GENRES: "/genre/movie/list",
    DETAILS: (id) => `/movie/${id}`,
    VIDEOS: (id) => `/movie/${id}/videos`,
};

const fetchData = async (url) => {
    try {
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (error.response) {
            console.error(
                `TMDB Error ${error.response.status}:`,
                error.response.data
            );
        } else if (error.request) {
            console.error("Network Error");
        } else {
            console.error(error.message);
        }
        throw error;
    }
};

// API function
export const getPopularMovies = async () => {
    const data = await fetchData(
        ENDPOINTS.POPULAR
    );
    return data.results;
};

export const getMovieDetails = async (id) => {
    return await fetchData(
        ENDPOINTS.DETAILS(id)
    );
};

export const getMovieTrailer = async (id) => {
    const data = await fetchData(
        ENDPOINTS.VIDEOS(id)
    );
    return data.results;
};

export const getGenres = async () => {
    const data = await fetchData(
        ENDPOINTS.GENRES
    );
    return data.genres;
};