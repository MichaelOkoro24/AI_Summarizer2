import { configureStore } from '@reduxjs/toolkit';

import { articleApi } from './article'

export const store = configureStore({
    // the slice of state/store that is managed by the reducer in this case the article slice
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});