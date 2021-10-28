import {createSlice} from '@reduxjs/toolkit';
import { ExchangeAPI } from '../API';

export const fetchRate = (from, to) => async (dispatch) => {
    try {
        const res = await ExchangeAPI.converter(from, to);
        dispatch(setRate(Object.values(res.rates)[0]))
    } catch (error) {
        console.log(error);
    }
}
export const fetchRates = (from, to) => async (dispatch) => {
    try {
        const res = await ExchangeAPI.currencyRate(from, to);
        dispatch(setRates(res.rates));
    } catch (error) {
        throw new error
    }
}


const exchangeSlice = createSlice({
    name: 'exchanger',
    initialState: {
        currenties: ['RUB', 'USD', 'EUR', 'GBP', 'CHF', 'JPY'],
        rates: [],
        rate: 1,
        from: 'USD',
        to: 'RUB'
    },
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload
        },
        setFrom: (state, action) => {
            state.from = action.payload
        },
        setTo: (state, action) => {
            state.to = action.payload
        },
        setRates: (state,action) => {
            state.rates = action.payload
        },
        setRate(state,action) {
            state.rate = action.payload
        }
        
    },
});

export const {setAmount,setFrom,setTo,setRates,setRate} = exchangeSlice.actions;
export default exchangeSlice.reducer;
