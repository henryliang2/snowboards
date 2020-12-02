import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queries from './../Resources/Queries'

const ManufacturerHeader = (props, { client }) => {

  const { manufacturer } = useParams();
  const { loading, error, data } = useQuery(queries.GET_MANUFACTURER, {
    variables: { name: manufacturer}
  })
  
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    if(data) console.log(data)
  }, [data])

  return (
    <React.Fragment>
      Hello
    </React.Fragment>
  );
}

export default ManufacturerHeader;