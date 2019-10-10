import gql from 'graphql-tag'
export const USER_REGISTER_MUTATION = gql`
  mutation userRegister($username: String!, $email: String!, $password: String!, $creator: Boolean!) {
    userRegister(
      username: $username,
      authProvider: {
        data: {
            email: $email,
            password: $password,
            }
      },
    creator: $creator,
    ) {
      id
      username
    }
  }
`