import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './../App.css'

const SnowboardCard = ({ snowboard }) => {

  const cardRef = useRef(null);

  const upperCasedName = snowboard.name.toUpperCase();

  return (
    <div className='card' ref={ cardRef }>
      <div className='card__name'>
        <span className='card__link'>
          <Link to={`/snowboard/${snowboard.name}`}>{upperCasedName}</Link>
        </span>
      </div>
      <div className='card__info'>
        <div className='card__type'>
          <span className='card__descriptor'>TYPE:&nbsp;</span>
          {snowboard.directional ? 'Directional' : 'Twin'}
        </div>
        <div className='card__style'>
          <span className='card__descriptor'>STYLE:&nbsp;</span>
          <span className='card__link'><Link to={`/type/${snowboard.style}`}>{snowboard.style}</Link></span>
        </div>
        <div className='card__manufacturer'>
          <span className='card__descriptor'>BUILT BY:&nbsp;</span>
          <span className='card__link'><Link to={`/manufacturer/${snowboard.manufacturer}`}>{snowboard.manufacturer}</Link></span>
        </div>
      </div>
      <div>
        <img 
          className='card__image'
          src={snowboard.image} 
          alt={snowboard.name} 
          onLoad={() => { cardRef.current.classList.add('fade-in') }}
          />
      </div>
    </div>
  )

}

export default SnowboardCard;