import React from 'react';
import './Info.css';
import Search from "../components/Nav/Search";
import { Header } from './components/Header/Header';
import Foto from "../assets/img/1.jpg";



export const Info = () => {
  return (
    <>
        <div>
          <Search />
            <div className="cont-flex">
                <div className='container-img'>
                  <img src={Foto} /> 
                </div>
                <div className='header-pad'>
                  <Header />
                </div>
            </div>
        </div>
    </>
  )
}
