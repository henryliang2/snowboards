import React, { useEffect, useContext, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { QueryArgumentContext, SnowboardContext } from '../App';

const SnowboardList = (props) => {

  let { type, manufacturer } = useParams();
  const { setSnowboards } = useContext(SnowboardContext);
  const { setQueryArguments } = useContext(QueryArgumentContext);

  const getQueryFromParams = useCallback(() => {
    setSnowboards([]);
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
                  <Link to={`/type/${snowboard.style}`}>{snowboard.style}</Link>
                </div>
                <div className='card__manufacturer'>
                  <span className='card__descriptor'>BUILT BY:&nbsp;</span>
                  <Link to={`/manufacturer/${snowboard.manufacturer}`}>{snowboard.manufacturer}</Link>
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