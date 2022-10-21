import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/ll">Home</a>
                <a href="/1">Orders</a>
                <a href="/2">Inventory</a>
                <a href="/2">Login</a>
            </div>
        </nav>
    );
};

export default Header;