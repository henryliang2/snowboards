import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queries from './../Resources/Queries';
import './../Styles/ManufacturerHeader.css';
import './../App.css';

const ManufacturerHeader = (props, { client }) => {

  const { manufacturer } = useParams();
  const { data } = useQuery(queries.GET_MANUFACTURER, {
    variables: { name: manufacturer}
  })
  
  const [location, setLocation] = useState('');
  const [logo, setLogo] = useState('');

  const headerLogoRef = useRef(null);

  useEffect(() => {
    if(data){
      setLogo(data.manufacturer.logo)
      setLocation(data.manufacturer.location)
    }
  }, [data])

  return (
    <div className='header'>
      <div className='header__logo' ref={ headerLogoRef }>
        <img 
          src={logo} 
          alt='logo' 
          onLoad={() => { headerLogoRef.current.classList.add('fade-in') }}
          />
      </div>
      <div className='header__location'>{`Manufactured in ${location}`}</div>
    </div>
  );
}

export default ManufacturerHeader;