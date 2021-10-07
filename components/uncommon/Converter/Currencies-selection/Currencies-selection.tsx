import React from 'react';
import CurrenciesSelectionStyled from './Currencies-selection-styled';
import Dropdown from './Dropdown/Dropdown';
import SwapButton from './Swap-button/Swap-button';

interface IProps {
    selectedCurrencyFrom: string,
    selectedCurrencyTo: string,
    swapCurrencies: () => any,
    currenciesFrom: any,
    currenciesTo: any
}

const CurrenciesSelection = ({selectedCurrencyFrom, selectedCurrencyTo, swapCurrencies, currenciesFrom, currenciesTo}: IProps) => {   
    const [isLeftDropdownOpen, setIsLeftDropdownOpen] = React.useState(false);
    const [isRightDropdownOpen, setIsRightDropdownOpen] = React.useState(false);

    return (
        <CurrenciesSelectionStyled>
            <Dropdown 
                open={isLeftDropdownOpen} 
                selectedCurrency={selectedCurrencyFrom}
                isDropDownOpen={isLeftDropdownOpen}
                setIsDropdownOpen={() => {
                    setIsLeftDropdownOpen(!isLeftDropdownOpen);
                    setIsRightDropdownOpen(false);
                }}
                currencies={currenciesFrom}
                position={"left"}
            />
            <SwapButton swapCurrencies={swapCurrencies} />
            <Dropdown 
                open={isRightDropdownOpen} 
                selectedCurrency={selectedCurrencyTo}
                isDropDownOpen={isRightDropdownOpen}
                setIsDropdownOpen={() => {
                    setIsLeftDropdownOpen(false);
                    setIsRightDropdownOpen(!isRightDropdownOpen);
                }}
                currencies={currenciesTo}
                position={"right"}
            />
        </CurrenciesSelectionStyled>
    );
};

export default CurrenciesSelection;
