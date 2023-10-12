import React from 'react';
import './Obras.css';
import Foto from "../../../assets/img/1.jpg";



export const Card = ( { img, title, author, location }) => {
  return (
    <>
        <div className='card-flex'>
            <div className='card-img'>
                <img src={img} />
            </div>
            <div>
                <h2 className='card-title'>{title}</h2>
                <p className='card-subtitle'>{author}</p>
                <p className='card-p'>{location}</p>
            </div>
        </div>
    </>
  )
}



const Obras = () => {
  return (
    <>
        <div className='section-flex'>
            <div className="sticky">
                <h2>Obras</h2>
                <span>representativas</span>
            </div>
            <div className="cards-flex">
                <Card 
                    img={Foto}
                    title="El banquete de Herodes"
                    author="Giotto"
                    location="Italia, 1315" />
                <Card 
                    img={Foto}
                    title="sasasa"
                    author="sasasa"
                    location="sassaa" />
                <Card 
                    img={Foto}
                    title="sasasa"
                    author="sasasa"
                    location="sassaa" />
                <Card 
                    img={Foto}
                    title="sasasa"
                    author="sasasa"
                    location="sassaa" />
                <Card 
                    img={Foto}
                    title="sasasa"
                    author="sasasa"
                    location="sassaa" />
                <Card 
                    img={Foto}
                    title="sasasa"
                    author="sasasa"
                    location="sassaa" />                    
            </div>
        </div>
        
    </>
  )
}

export default Obras;