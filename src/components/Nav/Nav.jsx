import React from 'react';
import './Nav.css';
import Search from "./Search";


const Nav = () => {
  return (
    <>
        <nav className="flex-nav">
            <div>
                <span className="logo">Movimientos</span>  
            </div>
            <Search />
        </nav>
    </>
  )
}

export default Nav;
