import { configureStore } from "@reduxjs/toolkit";
import watchLaterReducer from './slices/watchLaterSlice'

export const store = configureStore({
    reducer: {
        watchLater: watchLaterReducer,
    },
});