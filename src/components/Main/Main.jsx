import React from 'react';
import './Main.css';
import Items from "./data.js"; 


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
                Items.map(movimiento => {

                    return (
                        
                            <Item
                            img={movimiento.img}
                            title={movimiento.name}
                            years={movimiento.year}
                            key={movimiento.id}
                        />                        
                    )
                })
            }
        </div> 
    </>
  )
}

export default Main;