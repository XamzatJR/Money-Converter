import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTo,setFrom, fetchRate } from '../../redux/exchangeSlice';
import InputField from '../InputxSelect/InputField'
import classes from './Converter.module.css'
function Converter() {
    const dispatch = useDispatch();
    let {from, to,rate} = useSelector(state => state.exchange)
    const [inputValue, setInputValue] = useState(1)

        function setNewFrom(from) {
            dispatch(setFrom(from))
            dispatch(fetchRate(from,to))
        }
        function setNewTo(to) {
            dispatch(setTo(to))
            dispatch(fetchRate(from,to))
        }
    return (
        <div className={classes.container}>
            <h1 className={classes.h1}>Конвертировать валюту</h1>
            <div className={classes.main}>
                <InputField defaultValue={from} excludedValue={to}
                 setValue={setNewFrom} 
                 inputValue={inputValue} setInputValue={setInputValue} />
                <div className={classes.arrow}></div>

                <InputField defaultValue={to} 
                excludedValue={from} 
                setValue={setNewTo} 
                readOnly 
                inputValue={rate} input={inputValue} />
            </div>
        </div>
    )
}

export default Converter
