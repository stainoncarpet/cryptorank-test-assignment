import { initialState, IConverterSlice } from "./converter";

const reducers = {
    setAmount: (state: IConverterSlice, action: any) => {
        state.amount = action.payload;
    },
    setCurrenciesLists: (state: IConverterSlice, action: any) => {
        state.availableCurrenciesFrom = action.payload.availableCurrenciesFrom;
        state.availableCurrenciesTo = action.payload.availableCurrenciesTo;
        state.selectedCurrencyFrom = action.payload.selectedCurrencyFrom;
        state.selectedCurrencyTo = action.payload.selectedCurrencyTo;
    },
    swapSelectedCurrencies: (state: IConverterSlice, action: any) => {
        const temp = state.selectedCurrencyFrom;
        state.selectedCurrencyFrom = state.selectedCurrencyTo;
        state.selectedCurrencyTo = temp;
    },
    selectCurrency: (state: IConverterSlice, action: any) => {
        console.log(state, action);
        
        if(action.payload.position === "left") {
            state.selectedCurrencyFrom = action.payload.currency;
        } else {
            state.selectedCurrencyTo = action.payload.currency;
        }
    }
};

export default reducers;