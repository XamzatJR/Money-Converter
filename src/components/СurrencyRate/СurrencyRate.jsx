import React, { useState } from 'react';
import classes from './СurrencyRate.module.css';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputxSelect/InputField';
import { fetchRates, setFrom } from '../../redux/exchangeSlice';
import Header from '../Header/Header';

function СurrencyRate() {
    const [inputValue, setInputValue] = useState(1)
    const {rates, from, currenties} = useSelector(state => state.exchange),
        dispatch = useDispatch(),
        to = [];
    for (let [name, value] of Object.entries(rates)) {
        to.push({name, value})
    }
    function setNewFrom(from) {
        dispatch(setFrom(from))
        dispatch(fetchRates(from,currenties.join()))
    }
    return (
        <>
        <Header title={'Курс валют'} btn={'Обмен валют'} link={'/'} />
        <main className={classes.container}>
            <h1 className={classes.h1}>Текущий курс валют</h1>
            <div className={classes.main}>
                <InputField defaultValue={from} setValue={setNewFrom} setInputValue={setInputValue} inputValue={inputValue} />
                <div className={classes.equal}>
                    <div className={classes.fstick}></div>
                    <div className={classes.sstick}></div>
                </div>
                <div className={classes.rates}>
                    {to.map((el, i) => {
                        return (
                            <div className={classes.rate} key={i}>
                                <span className={classes.name}>{el.name}</span>
                                <span className={classes.value}>{(el.value * inputValue).toFixed(3)}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
        </>
    )
}

export default СurrencyRate
