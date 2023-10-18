import React from 'react';
import './Main.css';
import Movimientos from '../../data/data';

import { Link } from 'react-router-dom';


const Item = ({ img, title, years }) => {
  return (
    <>
        <div className="item">
            <div className="box-img">
                <img src={img} alt={title} />
            </div>
            <div className="box-content">
                <h2>{title}</h2>
                <p>{years}</p>
            </div>                    
        </div>
    </>
  );
}


const Main = () => {
  return (
    <>
        <div className='galeria'>
            {
                Movimientos.map(movimiento => {

                    return (
                        <Link
                        
                        to="/info">

                            <Item
                            img={movimiento.img}
                            title={movimiento.title}
                            years={movimiento.years}
                            key={movimiento.id}
                        />   
                        </Link>
                                                 
                    )
                })
            }
        </div> 
    </>
  )
}

export default Main;