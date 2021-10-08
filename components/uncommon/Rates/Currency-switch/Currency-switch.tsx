import React from 'react';
import CurrencySwitchStyled from './Currency-switch-styled';

interface IProps {
    handleSwitchCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const CurrencySwitch = ({handleSwitchCurrency}: IProps) => {
    return (
        <CurrencySwitchStyled>
            <label htmlFor="currency-select" >Currency:</label>
            <select name="pets" id="currency-select" onChange={handleSwitchCurrency}>
                <option value="USD">USD</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
            </select>
        </CurrencySwitchStyled>
    )
};

export default CurrencySwitch;
