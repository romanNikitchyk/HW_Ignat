import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./header.module.css"
import pic from "./pages/Heand.jpg"

function Header() {
    return (
        <div className={s.header}>

            <NavLink to={PATH.PRE_JUNIOR} className={(p) => p.isActive ? s.active : s.unactive}>Pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={(p) => p.isActive ? s.active : s.unactive}> Junior</NavLink>
            <NavLink to={PATH.JUNIORPLUS} className={(p) => p.isActive ? s.active : s.unactive}> Junior+</NavLink>
            <div className={s.slider}><img src={pic}/></div>
        </div>
    )
}

export default Header
