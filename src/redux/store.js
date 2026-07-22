import { configureStore } from "@reduxjs/toolkit";
import watchLaterReducer from './slices/watchLaterSlice'

// load saved movies from localStorage
const loadWatchLater = () => {
    try {
        const savedData = localStorage.getItem("watchLater");

        if (savedData === null) {
            return undefined;
        }

        return {
            watchLater: {
                movies: JSON.parse(savedData),
            },
        };
    } catch (error) {
        console.error("Failed to load watch later:", error);
        return undefined;
    }
};

// save movies to localStorage
const saveWatchLater = (state) => {
    try {
        localStorage.setItem(
            "watchLater",
            JSON.stringify(state.watchLater.movies)
        );
    } catch (error) {
        console.error("Failed to save watch later:", error);
    }
};

export const store = configureStore({
    reducer: {
        watchLater: watchLaterReducer,
    },
    // preload the store
    preloadedState: loadWatchLater(),
});

// subscribe() runs automatically -> saveWatchLater()
store.subscribe(() => {
    saveWatchLater(store.getState());
});