import React, { useState,useRef,useEffect } from 'react'
import { useSelector } from 'react-redux';
import classes from './InputField.module.css';


function useOutsideAlerter(ref, setActive) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setActive(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }


function InputField({defaultValue,setValue,excludedValue,inputValue,setInputValue,input,...props}) {
    const ref = useRef(null)
    const [active, setActive] = useState(false),
           curr = useSelector(state => state.exchange.currenties),
           currenties = curr.filter(el => el !== defaultValue && el !== excludedValue);
    function changeActive () {
        setActive(!active);
    }
    function setNewValue (el) {
        setValue(el)
        if (inputValue === '') setInputValue(1);
        setActive(false);
    }
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    useOutsideAlerter(ref, setActive)
    return (
        <div className={classes.inputField}>
            <input {...props} className={classes.input} 
            onChange={e => handleChange(e)} 
            value={input ? (inputValue * input).toFixed(3) : inputValue}
            type="text" /> 
            <div ref={ref} className={classes.select}> 
                <div onClick={() => changeActive()} className={classes.default_select}>
                    <div className={classes.defaultValue}>{defaultValue}</div>
                    <div className={ active ? classes.logo_active : classes.logo}></div>
                </div>
                <ul className={ active ? classes.ul_active : classes.ul}>
                {currenties.map((el, i) => {
                    return (
                        <li onClick={() => setNewValue(el)} key={i} className={classes.li}>{el}</li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default InputField
