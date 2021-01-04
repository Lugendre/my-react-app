import gql from 'graphql-tag';

export const UserQuery = gql`
  query User($id: Int!) {
    user(where: { id: $id }) {
      id
      name
    }
  }
`;
