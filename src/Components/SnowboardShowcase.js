import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queries from './../Resources/Queries'
import './../Styles/SnowboardShowcase.css'


const SnowboardShowcase = () => {

  const [snowboard, setSnowboard] = useState({
    name: '',
    manufacturer: '',
    image: '',
    directional: null,
    wide: null,
  })

  const { name } = useParams();
  const { data } = useQuery(queries.GET_SNOWBOARD, {
    variables: { name: name }
  })

  useEffect(() => {
    if(data) {
      setSnowboard({
        ...data.snowboard,
        name: data.snowboard.name.toUpperCase()
      })
    }
  }, [data])

  return (
    <React.Fragment>
      <div className='showcase__container'>
        <div className='showcase__image'><img alt='snowboard' src={ snowboard.image } /></div>
        <div className='showcase__info'>
          <div className='showcase__name'>{ snowboard.name }</div>
          <div className='showcase__manufacturer'>
            <span className='showcase__descriptor'>BUILT BY:&nbsp;</span>
            { snowboard.manufacturer }
          </div>
          <div className='showcase__directional'>
            <span className='showcase__descriptor'>SHAPE:&nbsp;</span>
            { snowboard.directional ? 'Directional' : 'Twin'
         }</div>
          <div className='showcase__width'>
            <span className='showcase__descriptor'>WIDTH:&nbsp;</span>
            { snowboard.wide ? 'Wide' : 'Normal' }
          </div>
          <div className='showcase__description'></div>
        </div>
      </div>
    </React.Fragment>
  )

}

export default SnowboardShowcase;