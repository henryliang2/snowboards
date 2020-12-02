import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SnowboardContext } from '../App';
import './../Styles/Landing.css'

const Landing = () => {
  
  const history = useHistory();
  const { snowboards, setSnowboards } = useContext(SnowboardContext);

  const [type, setType] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = () => {
    if (type.length) history.push(`/type/${type}`)
    if (manufacturer.length) history.push(`/manufacturer/${manufacturer}`)
  }

  return (
    <div className='landing'>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          setSnowboards([]);
          handleSubmit();
        }
      }>
        <div className='landing__title'>Quality snowboards made right here at</div>
        <div className='landing__category'>Browse by Riding Style</div>
        <div className='landing__select'>
          <select 
            value={type}
            onChange={(e) => { 
              setType(e.target.value)
              setManufacturer('');
            }}
            >
            <option value=''>Choose a style</option>
            <option value='Freestyle'>Freestyle</option>
            <option value='All-Mountain Freestyle'>All-Mountain Freestyle</option>
            <option value='All-Mountain Freeride'>All-Mountain Freeride</option>
            <option value='Freeride'>Freeride</option>
          </select>
        </div>
        <div className='landing__category'>Browse by Manufacturer</div>
        <div className='landing__select'>
        <select 
            value={manufacturer}
            onChange={(e) => { 
              setManufacturer(e.target.value)
              setType('');
            }}
            >
            <option value=''>Choose a manufacturer</option>
            <option value='Wired Snowboards'>Wired Snowboards</option>
            <option value='Hightide Mfg'>Hightide Mfg</option>
          </select>
        </div>
        <input type='submit' value='Search' />
      </form>
    </div>
  );

}

export default Landing;