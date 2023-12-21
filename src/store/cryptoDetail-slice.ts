import { createSlice } from "@reduxjs/toolkit";
import { CoinType } from "../types/types";

const initialCryptoDetailState: CoinType = {
    coin: {
        uuid: "",
        symbol: "",
        name: "",
        price: "",
        description: "",
        color: "",
        iconUrl: "",
        websiteUrl: "",
    }
}

export const cryptoDetailSlice = createSlice({
    name: 'cryptoDetailSlice',
    initialState: initialCryptoDetailState,
    reducers: {
        getCryptoDetail(state, action) {
            state.coin = {...action.payload}
        }
    }
});

export const cryptoDetailSliceAction = cryptoDetailSlice.actions;