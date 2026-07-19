import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
};

const watchLaterSlice = createSlice({
    name: "watchLater",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const exists = state.movies.find(
                (movie) => movie.id === action.payload.id
            );
            if (!exists) {
                state.movies.push(action.payload);
            }
        },

        removeMovie: (state, action) => {
            state.movies = state.movies.filter(
                (movie) => movie.id !== action.payload
            );
        },

    },
});

export const { addMovie, removeMovie } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;