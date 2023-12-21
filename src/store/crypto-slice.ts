import { createSlice } from "@reduxjs/toolkit";
import { CoinsType } from "../types/types";

const initialCryptoState: CoinsType = {
    coins: [],
};

export const cryptoSlice = createSlice({
    name: 'cryptoSlice',
    initialState: initialCryptoState,
    reducers: {
        getAllCryptos(state, action) {
            state.coins = [...action.payload]
        },
        addCrypto(state,action) {
            state.coins = [...state.coins, {...action.payload }]
        },
        filterCryptos(state,action) {
            state.coins = state.coins.filter(coin => coin.name.includes(action.payload))
        }
    }
});

export const cryptoSliceAction = cryptoSlice.actions;