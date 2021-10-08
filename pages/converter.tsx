import fetch from "isomorphic-unfetch";

import Layout from '../components/common/Layout/Layout';
import Converter from '../components/uncommon/Converter/Converter';
import { wrapper } from '../redux/store';

export default function ConverterPage(props: any) {
  return <Layout>
    <Converter />
  </Layout>
}

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({req, res}: any) => {
  //const res2 = await fetch("https://api.cryptorank.io/v1/currencies/1?api_key=" + process.env.API_KEY);
  //const {data} = await res2.json();
  //const currenciesListObject = data?.values;

  const currenciesListObject = {
    USD: {
      price: 53945.69332108,
      volume24h: 15910663169,
      high24h: 55513.14619582,
      low24h: 53692.5766016,
      marketCap: 1016196603366.5123,
      percentChange24h: -1.4946,
      percentChange7d: 22.85,
      percentChange30d: 15.0193,
      percentChange3m: 64.1873,
      percentChange6m: -8.0473
    },
    BTC: {
      price: 1,
      volume24h: 294938,
      high24h: 1,
      low24h: 1,
      marketCap: 18837400,
      percentChange24h: 0,
      percentChange7d: 0,
      percentChange30d: 0,
      percentChange3m: 0,
      percentChange6m: 0
    },
    ETH: {
      price: 15.0086554395,
      volume24h: 4426630,
      high24h: 15.6078304691,
      low24h: 14.9823537316,
      marketCap: 282724045.9760373,
      percentChange24h: -1.562,
      percentChange7d: 3.8337,
      percentChange30d: 10.0589,
      percentChange3m: -3.1744,
      percentChange6m: -46.2008
    }
  }
  
  store.dispatch({type: "converter/setCurrenciesLists", payload: {
    availableCurrenciesFrom: currenciesListObject || {}, 
    availableCurrenciesTo: currenciesListObject || {},
    selectedCurrencyFrom: Object.keys(currenciesListObject)[1],
    selectedCurrencyTo: Object.keys(currenciesListObject)[0],
  }});
  
  return {props: {}}
});