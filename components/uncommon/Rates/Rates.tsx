import React from 'react';
import { useSelector } from 'react-redux';

import Heading from '../../common/Heading/Heading';
import RatesStyled from './Rates-styled';
import RatesItem from './Rates-item/Rates-item';

const Rates = () => {
    const currencies = useSelector((state: any) => state.watchlist.currencies)

    return (
        <RatesStyled>
            <Heading>Rates Watchlist</Heading>
            <table>
                <thead>
                    <tr>
                        <th>
                            <span className="name">Name</span>
                        </th>
                        <th>
                            <span>Price</span>
                        </th>
                        <th>
                            <span>Circ. Supply</span>
                        </th>
                        <th>
                            <span>Market Cap</span>
                        </th>
                        <th>
                            <span>Category</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currencies?.map(({key, name, symbol, price: {USD}, availableSupply, marketCap, category, icon}: any) => 
                        {
                            return <RatesItem 
                                key={key} 
                                name={name}
                                symbol={symbol}
                                price={USD} 
                                availableSupply={availableSupply} 
                                marketCap={marketCap} 
                                category={category}
                                icon={icon}
                            />
                        }
                    )}
                </tbody>
            </table>
        </RatesStyled>
    );
};

export default Rates;