import { configureStore } from "@reduxjs/toolkit";
import { cryptoSlice } from "./crypto-slice";
import { cryptoDetailSlice } from "./cryptoDetail-slice";

export const store = configureStore({
    reducer: {
        cryptoReducer: cryptoSlice.reducer,
        cryptoDetailReducer: cryptoDetailSlice.reducer
    },
});