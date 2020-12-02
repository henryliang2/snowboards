import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManufacturerHeader = (props) => {

  const { manufacturer } = useParams();
  
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    props.fetchManufacturer(manufacturer)
      .then(console.log)
  }, [])

  return (
    <React.Fragment>
      Hello
    </React.Fragment>
  );
}

export default ManufacturerHeader