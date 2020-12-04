import React, { useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { QueryArgumentContext, SnowboardContext } from '../App';
import SnowboardCard from './SnowboardCard';

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
        props.snowboards.map(snowboard => <SnowboardCard snowboard={snowboard} key={snowboard.name}/>
    )}
  </div>
  );

}

export default SnowboardList;