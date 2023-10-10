import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <>
        <nav className="flex-nav">
            <div>
                <span className="logo">Movimientos</span>  
            </div>
            <div className="fixed">
                <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/>
                    <input type="text" placeholder="Buscar" />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav;