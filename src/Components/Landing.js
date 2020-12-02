import React, { useState } from 'react';
import './../Styles/Landing.css'

const Landing = () => {

  const [ridingStyle, setRidingStyle] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = () => {
    if (ridingStyle.length) {

    }
    
    if (manufacturer.length) {
      
    }
  }

  return (
    <div className='landing'>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }
      }>
        <div className='landing__title'>Quality snowboards made right here at</div>
        <div className='landing__category'>Browse by Riding Style</div>
        <div className='landing__select'>
          <select 
            value={ridingStyle}
            onChange={(e) => { 
              setRidingStyle(e.target.value)
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
              setRidingStyle('');
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