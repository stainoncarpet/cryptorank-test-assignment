import React from 'react';
import { useSelector } from 'react-redux';

import Heading from '../../common/Heading/Heading';
import RatesStyled from './Rates-styled';
import RatesItem from './Rates-item/Rates-item';
import CurrencySwitch from './Currency-switch/Currency-switch';

enum EPricedInCurrency {
    BTC = "BTC",
    ETH = "ETH",
    USD = "USD"
}

const Rates = () => {
    const currencies = useSelector((state: any) => state.watchlist.currencies);

    const [isDisplayedIn, setIsDisplayedIn] = React.useState(EPricedInCurrency.USD);

    const handleSwitchCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIsDisplayedIn(e.target.value as EPricedInCurrency)
    };

    return (
        <RatesStyled>
            <Heading>Rates Watchlist</Heading>
            <table>
                <thead>
                    <tr>
                        <th><span className="name">Name</span></th>
                        <th><span>Price</span></th>
                        <th><span>Circ. Supply</span></th>
                        <th><span>Market Cap</span></th>
                        <th><span>Category</span></th>
                    </tr>
                </thead>
                <tbody>
                    {currencies?.map(({key, name, symbol, price: {USD, BTC, ETH}, availableSupply, marketCap, category, icon}: any, index: number) => 
                        {
                            return <RatesItem 
                                key={key} 
                                name={name}
                                symbol={symbol}
                                price={isDisplayedIn === EPricedInCurrency.USD 
                                    ? USD
                                    : isDisplayedIn === EPricedInCurrency.BTC
                                        ? BTC
                                        : ETH
                                } 
                                availableSupply={availableSupply} 
                                marketCap={marketCap} 
                                category={category}
                                icon={icon}
                                hasBackground={index % 2 === 1}
                            />
                        }
                    )}
                </tbody>
            </table>
            <CurrencySwitch handleSwitchCurrency={handleSwitchCurrency} />
        </RatesStyled>
    );
};

export default Rates;