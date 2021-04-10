import React from 'react';
import { NavLink } from 'react-router-dom';
import './navMenu.css';

const NavMenu = () => {
    return (<header className="NavMenu" >
        <div className="content">
            <NavLink className="main" to="/">News</NavLink>
            <NavLink to="/add"
                className="addButton"
                isActive={(match, location) => {
                    return location.pathname === "/add"
                }}
            >Add news</NavLink>
        </div>
    </header >)
}

export default NavMenu;