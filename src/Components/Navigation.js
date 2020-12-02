import React from 'react';
import { Link } from 'react-router-dom';
import './../Styles/Navigation.css'

const Navigation = () => {
  
  return (
    <div className='nav'>
      <div className='nav__inner'>
        <Link to='/'>
          <div className='nav__title'>CANADIAN<br/>SNOWBOARDS</div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;