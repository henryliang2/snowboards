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

const Queries = {
  GET_SNOWBOARDS
}

export default Queries;