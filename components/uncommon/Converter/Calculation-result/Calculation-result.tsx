import React from 'react';
import Heading from "../../../common/Heading/Heading";

interface IProps {
    amountFrom: number,
    amountTo: number,
    selectedCurrencyFrom: string,
    selectedCurrencyTo: string
}

const CalculationResult = ({amountFrom, amountTo, selectedCurrencyFrom, selectedCurrencyTo}: IProps) => {
    return (
        <Heading>
            {amountFrom} {selectedCurrencyFrom} = {amountTo} {selectedCurrencyTo}
        </Heading>
    );
};

export default CalculationResult;