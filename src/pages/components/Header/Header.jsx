import React from 'react';
import './Header.css';
import Obras from '../Obras/Obras';



export const Header = ({ titulo, anio, texto}) => {
  return (
    <>
        <div className='layout'>
            <div className='layout-titles'>
                <h1>{titulo}</h1>
                <p>{anio}</p>
            </div>
            <div className='header-paragraph'>
                <p>{texto}</p>
            </div>
            
            <Obras />
        </div>
    </>
    
  )
}
