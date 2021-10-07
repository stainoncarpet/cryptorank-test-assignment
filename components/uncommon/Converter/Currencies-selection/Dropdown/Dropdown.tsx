import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import converterSlice from '../../../../../redux/slices/converter/converter';

import DropdownStyled from './Dropdown-styled';

interface IProps {
    selectedCurrency: string
    open?: boolean,
    isDropDownOpen: boolean,
    setIsDropdownOpen: any,
    currencies: Array<any>,
    position: string
}

const Dropdown = (props: IProps) => {
    const {selectedCurrency, open = false, isDropDownOpen, setIsDropdownOpen, currencies, position} = props;
    const setCurrency = converterSlice.actions.selectCurrency;
    const dispatch = useDispatch();

    const handleChange = () => {};

    const handleSetCurrency = (currency: string, position: string) => {
        dispatch(setCurrency({currency, position}))
    };

    return (
        <DropdownStyled {...props}>
            <input type="text" value={selectedCurrency} onChange={handleChange} />
            <span onClick={setIsDropdownOpen}></span>
            {isDropDownOpen && <ul>
                {currencies.map((c) => <li key={c} onClick={() => handleSetCurrency(c, position)}>{c}</li>)}
            </ul>}
        </DropdownStyled>
    );
};

export default Dropdown;
