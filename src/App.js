import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import Converter from './components/Converter/Converter';
import Header from './components/Header/Header';
import СurrencyRate from './components/СurrencyRate/СurrencyRate';
import { fetchRate, fetchRates } from './redux/exchangeSlice';

function App() {
  let {from, to, currenties} = useSelector(state => state.exchange)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRate(from,to))
    dispatch(fetchRates(from, currenties.join()))
  }, [])
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Converter />
        </Route>
        <Route path="/currency_rate">
          <СurrencyRate />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
