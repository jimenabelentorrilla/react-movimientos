import React from 'react';
import './Header.css';
import Obras from '../Obras/Obras';


export const Header = () => {
  return (
    <>
        <div className='layout'>
            <div className='layout-titles'>
                <h1>Proto-Renacimiento</h1>
                <p>1300–1400</p>
            </div>
            <div className='header-paragraph'>
                <p>Primer Renacimiento, o Renacimiento primitivo, o Renacimiento temprano o Renacimiento inicial o Prerrenacimiento…</p>

                <p>En torno al siglo XIV algo cambia en Europa. Se supone que estamos en la edad media, pero algo empieza a revolucionarse en la política (se consolidan los estados europeos), la sociedad (la burguesía empieza a ascender), la economía (es aquí cuando nace el capitalismo)… y por supuesto la cultura.</p>

                <p>De pronto es el hombre, y no Dios, el centro de todo. De pronto artistas y artesanos son valorados. De pronto se empieza a usar el naturalismo, la armonía y las proporciones matemáticas para crear belleza.</p>

                <p>El artista se vuelve un científico, debe saber de muchas disciplinas para desarrollar su oficio. Ya no practica solo actividades viles y mecánicas. Ahora su oficio empieza a elevarse. El artista empieza a soñar.</p>

                <p>En el proto-renacimiento estamos entre dos mundos. Estamos en el gótico (recordemos que este es un nombre a posteriori, pues para los renacentistas este era un arte de bárbaros, de godos), pero se empieza a sentir el Quattrocento.</p>
            </div>
            
            <Obras />
        </div>
    </>
    
  )
}
