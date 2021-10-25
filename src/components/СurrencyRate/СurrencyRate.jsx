import React, { useEffect } from 'react';
import classes from './СurrencyRate.module.css';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputxSelect/InputField';
import { ExchangeAPI } from '../../API';

function СurrencyRate() {
    
    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>Текущий курс валют</h1>
            <div className={classes.main}>
                <InputField />
                <div className={classes.equal}>
                    <div className={classes.fstick}></div>
                    <div className={classes.sstick}></div>
                </div>
                <div className={classes.rates}></div>
            </div>
        </div>
    )
}

export default СurrencyRate
