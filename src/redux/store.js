import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './exchangeSlice';


export const store = configureStore({
    reducer: {
        exchange: exchangeSlice
    }
})