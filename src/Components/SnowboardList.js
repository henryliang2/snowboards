import React, { useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { QueryArgumentContext } from '../App';

const SnowboardList = (props) => {

  let { type, manufacturer } = useParams();
  const { setQueryArguments } = useContext(QueryArgumentContext);

  const getQueryFromParams = useCallback(() => {
    if (type) setQueryArguments({ type });
    if (manufacturer) setQueryArguments({ manufacturer });
  }, [type, manufacturer])

  useEffect(() => {
    getQueryFromParams();
  }, [getQueryFromParams]);

  return (
    <div className='card__container'>
      { props.snowboards &&
        props.snowboards.map((snowboard, i) => {
          const upperCasedName = snowboard.name.toUpperCase();

          return (
            <div className='card' key={i}>
              <div className='card__name'>{upperCasedName}</div>
              <div className='card__info'>
                <div className='card__type'>
                  <span className='card__descriptor'>TYPE:&nbsp;</span>
                  {snowboard.directional ? 'Directional' : 'Twin'}
                </div>
                <div className='card__style'>
                  <span className='card__descriptor'>STYLE:&nbsp;</span>
                  {snowboard.style}
                </div>
                <div className='card__manufacturer'>
                  <span className='card__descriptor'>BUILT BY:&nbsp;</span>
                  {snowboard.manufacturer}
                </div>
              </div>
              <div className='card__image'><img src={snowboard.image} alt={snowboard.name} /></div>
            </div>
          )}
    )}
  </div>
  );

}

export default SnowboardList;