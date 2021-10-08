import fetch from "isomorphic-unfetch";

import Layout from '../components/common/Layout/Layout'
import Rates from '../components/uncommon/Rates/Rates';
import { wrapper } from '../redux/store';

export default function RatesPage(props: any) {
  return <Layout>
    <Rates />
  </Layout>
}

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({req, res}: any) => {
  const res2 = await fetch("https://tstapi.cryptorank.io/v0/coins?limit=10");
  const {data} = await res2.json();
  const currenciesListObject = data;
  
  store.dispatch({type: "watchlist/setCurrenciesList", payload: {
    currencies: currenciesListObject
  }});
  
  return {props: {}}
})