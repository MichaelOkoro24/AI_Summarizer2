import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    // the slice of state that is managed by the reducer
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});