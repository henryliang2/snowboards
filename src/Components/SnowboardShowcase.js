import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
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

  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const history = useHistory();
  const { name } = useParams();
  const { data } = useQuery(queries.GET_SNOWBOARD, {
    variables: { name: name }
  })

  const handleImageLoad = () => {
    containerRef.current.classList.add('fade-in')
  }

  useEffect(() => {
    if(data) {
      setSnowboard({
        ...data.snowboard,
        name: data.snowboard.name.toUpperCase()
      })
    }
  }, [data])

  useEffect(() => {
    if(imageRef.current && imageRef.current.complete) handleImageLoad()
  })

  return (
    <React.Fragment>
      <div className='showcase__container' ref={containerRef}>
        <div className='showcase__image'>
          <img 
            alt='snowboard' 
            src={ snowboard.image } 
            ref={imageRef} 
            />
        </div>
        <div className='showcase__info'>
          <div className='showcase__name'>{ snowboard.name }</div>
          <div className='showcase__manufacturer'>
            <span className='showcase__descriptor'>BUILT BY:&nbsp;</span>
            <span className='showcase__link'>
              <Link to={`/manufacturer/${snowboard.manufacturer}`}>{ snowboard.manufacturer }</Link>
            </span>
          </div>
          <div className='showcase__style'>
            <span className='showcase__descriptor'>STYLE:&nbsp;</span>
            <span className='showcase__link'>
              <Link to={`/type/${snowboard.style}`}>{snowboard.style}</Link>
            </span>
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
          <div className='showcase__link'>
            <a href={ snowboard.website } target='_blank' rel='noopenner noreferrer'>
              <span className='showcase__descriptor'>MANUFACTURER'S WEBSITE »</span>
            </a>
          </div>
        </div>
      </div>
      <div className='showcase__back-button'>
        <span onClick={() => { history.goBack() }}>
          ← Back to Snowboards
        </span>
      </div>
    </React.Fragment>
  )

}

export default SnowboardShowcase;