import gql from 'graphql-tag'
export const RESET_PASSWORD_MUTATION = gql`
  mutation userSendResetPassword($email: String!) {
    userSendResetPassword(
      email: $email,
      redirectUrl: ""
    ) {
      id
    }
  }
`