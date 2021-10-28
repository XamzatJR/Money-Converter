import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
function Header({title,btn,link}) {

    return (
        <header className={classes.header}>
            <div className={classes.title}>{title}</div>
            <Link to={link}>
            <button className={classes.btn}>{btn}</button>            
            </Link>
        </header>
    )
}

export default Header
