import gql from 'graphql-tag'
export const ALL_CREATIONS_QUERY = gql`
  query AllCreationsQuery {
    creation {
        id
        title
        creationDate
        coverUrl
        user {
          username
          id
        }
    }
  }
`