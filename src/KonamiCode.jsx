import { useState } from 'react';
import Konami from 'react-konami-code';
import './Konami.css';
import { FaTimes } from 'react-icons/fa';

function KonamiCode() {
  const [showCard, setShowCard] = useState(true); // Estado para controlar la visibilidad de la tarjeta

  const easterEgg = () => {

  };

  const handleClick = () => {
    setShowCard(false); // Establece el estado para ocultar la tarjeta
  };

  return (
    <>
      {showCard && ( // Renderiza la tarjeta solo si showCard es true
        <Konami action={easterEgg} style={{ display: 'block' }}>
          <div className={`KonamiCard`}>
            <button className="closeButton" onClick={handleClick}><FaTimes className='CloseButton' /></button>
            <div className="parent">
              <img src="./IPeep.avif" alt="Iratxe Peep Avatar" className="avatar" />
            </div>
            <section className='flex'>
              <h2 className="h2">Esta página no hubiera sido posible sin el apoyo incondicional de esa persona especial.</h2>
              <p className="p">Ojalá encuentres a alguien así.</p>
              <h2 className="h2">Muchisimas gracias por apoyarme en todo lo que hago</h2>
              <p className="p">Te quiero mucho</p>

            </section>
          </div>
        </Konami>
      )}
    </>
  );
}

export default KonamiCode;
