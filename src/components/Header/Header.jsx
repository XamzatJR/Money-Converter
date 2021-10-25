import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
function Header() {
    return (
        <header className={classes.header}>
            <button className={classes.lBtn}>Обмен валют</button>
            <Link to="/currency_rate">
            <button className={classes.rBtn}>Курс валют</button>            
            </Link>
        </header>
    )
}

export default Header
