import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queries from './../Resources/Queries'
import './../Styles/SnowboardShowcase.css'


const SnowboardShowcase = () => {

  const [snowboard, setSnowboard] = useState({
    name: '',
    manufacturer: '',
    image: '',
    description: '',
    directional: false,
    wide: false,
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
      console.log(data.snowboard)
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
            <Link to={`/manufacturer/${snowboard.manufacturer}`}>{ snowboard.manufacturer }</Link>
          </div>
          <div className='showcase__style'>
            <span className='showcase__descriptor'>STYLE:&nbsp;</span>
            <Link to={`/type/${snowboard.style}`}>{snowboard.style}</Link>
          </div>
          <div className='showcase__directional'>
            <span className='showcase__descriptor'>SHAPE:&nbsp;</span>
            { snowboard.directional ? 'Directional' : 'Twin'
         }</div>
          <div className='showcase__width'>
            <span className='showcase__descriptor'>WIDTH:&nbsp;</span>
            { snowboard.wide ? 'Wide' : 'Standard' }
          </div>
          <div className='showcase__description'>
            <span className='showcase__descriptor'>WHAT THEY SAY<br /></span>
            { snowboard.description }
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

export default SnowboardShowcase;