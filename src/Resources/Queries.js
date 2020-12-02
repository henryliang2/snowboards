import { gql } from '@apollo/client';

const GET_SNOWBOARDS = gql`
  query GetSnowboards ($type: String, $manufacturer: String) {
    snowboards(type: $type, manufacturer: $manufacturer) {
      name
      style
      image
      manufacturer
      directional
    }
  }
`

const GET_MANUFACTURER = gql`
  query GetManufacturer ($name: String) {
    manufacturer(name: $name) {
      name
      location
      logo
    }
  }
`

const Queries = {
  GET_SNOWBOARDS,
  GET_MANUFACTURER
}

export default Queries;