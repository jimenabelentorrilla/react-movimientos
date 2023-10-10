import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';


const icons = [
    {
        "id":"1",
        "class": "fb",
        "icon": faFacebook,
        "link": "https://www.facebook.com/"  
    },
    {
        "id":"2",
        "class": "tw",
        "icon": faTwitter,
        "link": "https://twitter.com/"
    },
    {
        "id":"3",
        "class": "pin",
        "icon": faPinterest,
        "link": "https://ar.pinterest.com/"
    },
    {
        "id":"4",
        "class": "ig",
        "icon": faInstagram,
        "link": "https://www.instagram.com/"
    },
    {
        "id":"5",
        "class": "tel",
        "icon": faTelegram,
        "link": "https://web.telegram.org/"
    }
  ]


const Footer = () => {
  return (
    <>
        <div className='footer'>
            {
                icons.map(icon => {
                    return (
                        <a href={icon.link} target="_blank" className={`icon-${icon.class}`}>
                            <FontAwesomeIcon
                                key={icon.id} 
                                icon={icon.icon}
                            />
                        </a>
                        
                )})
            }
        </div>
    </>
  )
}

export default Footer;