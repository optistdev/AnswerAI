import { configureStore } from '@reduxjs/toolkit';

import loadingReducer from './slices/loading.slice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
