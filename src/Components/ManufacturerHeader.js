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
  
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');

  const headerLogoRef = useRef(null);

  useEffect(() => {
    if(data){
      console.log(data.manufacturer)
      setLogo(data.manufacturer.logo)
      setName(data.manufacturer.name.toUpperCase());
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
      <div className='header__name'>{ name }</div>
    </div>
  );
}

export default ManufacturerHeader;