
import { createSlice } from '@reduxjs/toolkit';

import extraReducers from "./extra-reducers";
import reducers from './reducers';

export interface IConverterSlice {
    amount: number,
    selectedCurrencyFrom: string,
    selectedCurrencyTo: string,
    // Separate arrays because there could be different currencies on each list
    availableCurrenciesFrom: any,
    availableCurrenciesTo: any,
    //exchangeRate: number | null
}

const initialState: IConverterSlice = {
    amount: 1,
    selectedCurrencyFrom: "",
    selectedCurrencyTo: "",
    availableCurrenciesFrom: [],
    availableCurrenciesTo: [],
    //exchangeRate: null
}

const converterSlice = createSlice({
    name: 'converter',
    initialState: initialState,
    reducers: reducers,
    extraReducers: extraReducers
});

export default converterSlice;

export {initialState}; // used to reset state in extraReducers