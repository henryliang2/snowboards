import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import './../Styles/Landing.css'

const Landing = () => {

  const history = useHistory();
  const [displayStyles, setDisplayStyles] = useState(false);
  const [displayManufacturers, setDisplayManufacturers] = useState(false);

  useEffect(() => {
    document.removeEventListener('mousedown', handleClick, false);
    if(displayStyles || displayManufacturers) {
      document.addEventListener('mousedown', handleClick, false);
    }
  })

  const handleClick = (e) => {
    const leftColumn = document.getElementsByClassName('landing__column--left')[0];
    const rightColumn = document.getElementsByClassName('landing__column--right')[0];

    if(leftColumn === undefined) return;

    if(displayStyles && !leftColumn.contains(e.target)) {
      setDisplayStyles(false);
    }

    if(displayManufacturers && !rightColumn.contains(e.target)) {
      setDisplayManufacturers(false);
    }
  }

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

  return (
    <React.Fragment>
      <div className='landing__header'>
        <div><span>SHOP LOCAL. QUALITY SNOWBOARDS</span></div>
        <div><span>ARE MADE RIGHT HERE AT HOME.</span></div>
      </div>

      <div className='landing'>

        <div 
          className='landing__column landing__column--left'
          style={{ 
            opacity: displayManufacturers ? 0.4 : 1 
          }}>
          <div className='landing__category'>
            <div 
              className='landing__category-title'
              onClick={ () => { 
                setDisplayStyles(!displayStyles) 
                setDisplayManufacturers(false);
              }}>
                Browse by Riding Style
            </div>
            <div 
              className='landing__selection'
              style={{ 
                visibility: displayStyles ? 'visible' : 'hidden',
                opacity: displayStyles ? 1 : 0 
              }}>
              { listOfStyles.map(style => (
                  <div 
                    className='landing__option'
                    style={{ top: displayStyles ? '16px' : '0'}}
                    onClick={() => { history.push(`/type/${style}`) }}
                    key={style}>
                      {style}
                  </div>
                )) 
              }
            </div>
          </div>
        </div>

        <div 
          className='landing__column landing__column--right'
          style={{ 
            opacity: displayStyles ? 0.4 : 1 
          }}>
          <div className='landing__category'>
            <div 
              className='landing__category-title'
              onClick={ () => { 
                setDisplayManufacturers(!displayManufacturers) 
                setDisplayStyles(false);
              }}>
                Browse by Manufacturer
            </div>
            <div 
              className='landing__selection'
              style={{ 
                visibility: displayManufacturers ? 'visible' : 'hidden',
                opacity: displayManufacturers ? 1 : 0 
              }}>
              { listOfManufacturers.map(mfr => (
                  <div 
                    className='landing__option'
                    style={{ top: displayManufacturers ? '16px' : '0'}}
                    onClick={() => { history.push(`/manufacturer/${mfr}`) }}
                    key={mfr}>
                      {mfr}
                  </div>
                )) 
              }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default Landing;