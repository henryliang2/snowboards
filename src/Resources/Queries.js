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

const GET_SNOWBOARD = gql`
  query GetSnowboard ($name: String) {
    snowboard(name: $name) {
      name
      manufacturer
      style
      image
      manufacturer
      directional
      wide
      description
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
  GET_SNOWBOARD,
  GET_MANUFACTURER
}

export default Queries;