import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import './../Styles/Landing.css'

const Landing = () => {

  const [displayStyles, setDisplayStyles] = useState(false);
  const [displayManufacturers, setDisplayManufacturers] = useState(false);

  const listOfManufacturers = [
    'Wired Snowboards',
    'Hightide Mfg',
    'Knwn Mfg',
    'Endeavor Snowboards',
    'Trapper Snowboards',
    'Prior Snowboards and Skis'
  ]

  const listOfStyles = [
    'Freeride',
    'All-Mountain Freeride',
    'All-Mountain Freestyle',
    'Freestyle'
  ]
  
  const history = useHistory();

  return (
    <div className='landing'>
    
      <div className='landing__column landing__column--left'>
        <div className='landing__category'>
          <div 
            className='landing__category-title'
            onClick={ () => { setDisplayStyles(!displayStyles) }}>
              Browse by Riding Style
          </div>
          { displayStyles &&
            <div className='landing__selection'>
              { listOfStyles.map(style => (
                  <div 
                    className='landing__option'
                    onClick={() => { history.push(`/type/${style}`) }}
                    key={style}>
                      {style}
                  </div>
                )) 
              }
            </div>
          }
        </div>
      </div>

      <div className='landing__column landing__column--right'>
        <div className='landing__category'>
          <div 
            className='landing__category-title'
            onClick={ () => { setDisplayManufacturers(!displayManufacturers) }}>
              Browse by Manufacturer
          </div>
          { displayManufacturers &&
            <div className='landing__selection'>
              { listOfManufacturers.map(mfr => (
                  <div 
                    className='landing__option'
                    onClick={() => { history.push(`/manufacturer/${mfr}`) }}
                    key={mfr}>
                      {mfr}
                  </div>
                )) 
              }
            </div>
          }
        </div>
      </div>
    </div>
  );

}

export default Landing;