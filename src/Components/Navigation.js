import React from 'react';
import { Link } from 'react-router-dom';
import './../Styles/Navigation.css'
import MapleLeaf from './../Resources/maple-leaf.png'

const Navigation = () => {
  
  return (
    <div className='nav'>
      <div className='nav__inner'>
        <Link to='/'>
          <div className='nav__logo'>
            <div className='nav__leaf'><img src={ MapleLeaf } alt='maple leaf'/></div>
            <div className='nav__title'>CANADIAN<br/>SNOWBOARDS</div>
          </div>
        </Link>
        <div className='nav__db-info'>
          <p>
            Note: No external API was used for this project. <br/>
            All data is stored on Amazon RDS.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;