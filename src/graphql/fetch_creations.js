import gql from 'graphql-tag'
export const ALL_CREATIONS_QUERY = gql`
  query AllCreations {
    creation {
        title
        creationDate
        coverUrl
    }
  }
`