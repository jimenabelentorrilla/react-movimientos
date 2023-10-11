import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  return (
    <>
        
            <div className="fixed">
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="2x"/>
                    <input type="text" placeholder="Buscar" />
                </div>
            </div>
        
    </>
  )
}

export default Nav;