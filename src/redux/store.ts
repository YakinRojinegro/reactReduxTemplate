import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import fooReducer from './slices/fooSlice';

const defaultStore = configureStore({
    reducer: {
        fooProperties: fooReducer
    },
    middleware: [thunk]
});

export type RootState = ReturnType<typeof defaultStore.getState>
export default defaultStore;