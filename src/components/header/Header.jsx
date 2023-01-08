import React from 'react';
import './Header.css';
import Headroom from 'react-headroom';

export const Header = () => {
    return (
        <Headroom>
            <header className='header'>
                <a href='/' className='logo'>
                    <span className="grey-color"> &lt;</span>
                    <span className="logo-name">Catalina Castillo</span>
                    <span className="grey-color">/&gt;</span>
                </a>
            </header>
        </Headroom>
    )
}
