import React from 'react';
import calculator from '../../../../../helpers/calculator';
import converterSlice from '../../../../../redux/slices/converter/converter';
import SwapButtonStyled from './Swap-button-styled';

interface IProps {
    swapCurrencies: () => any
}

const SwapButton = ({swapCurrencies}: IProps) => {
    return <SwapButtonStyled onClick={swapCurrencies}>
            <i className="fas fa-exchange-alt" />
    </SwapButtonStyled>
};

export default SwapButton;
