import React, { SyntheticEvent } from 'react';
import converterSlice from '../../../../redux/slices/converter/converter';
import AmountStyled from './Amount-styled';

const Amount = ({amount, dispatch}: any) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.match(/^[+-]?[0-9]*([\.][0-9]*)?$/) || e.target.value.length === 0) {
            dispatch(converterSlice.actions.setAmount(e.target.value));
        }
    };

    const stepAmount = (step: number = 1) => {
        dispatch(converterSlice.actions.setAmount(parseInt(amount) + step));
    };

    return (
        <AmountStyled>
            <div className="amount-container">
                <input type="text" placeholder="0" value={amount} onChange={handleChange} />
                <span className="amount-switches">
                    <i className="fas fa-sort-up" onClick={() => stepAmount()} />
                    <i className="fas fa-sort-down" onClick={() => stepAmount(-1)} />
                </span>
            </div>
            <h2>Amount</h2>
        </AmountStyled>
    );
};

export default Amount;