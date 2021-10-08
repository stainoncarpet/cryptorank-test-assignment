import React from 'react';
import Image from 'next/image';

import RatesItemStyled from './Rates-item-styled';

interface IProps {
    key: string,
    name: string,
    symbol: string,
    price: number,
    availableSupply: number,
    marketCap: number,
    category: string,
    icon: string
}

const RatesItem = ({key, name, symbol, price, availableSupply, marketCap, category, icon}: IProps) => {
    return (
        <RatesItemStyled>
            <td className={`name ${name}`}>
                <div>
                    <a href={`https://cryptorank.io/price/${key}`}>
                        <div className="table-coin">
                            <Image src={icon}
                                width="16" 
                                height="16" 
                                alt={name} 
                            />
                            <div>{name} ({symbol})</div>
                        </div>
                    </a>
                </div>
            </td>
            <td>{price}</td>
            <td>{availableSupply}</td>
            <td>{marketCap}</td>
            <td><a href={`https://cryptorank.io/category/${category.toLowerCase().replaceAll(' ', '-')}`}>{category.split(' ')[0]}</a></td>
        </RatesItemStyled>
    );
};

export default RatesItem;
