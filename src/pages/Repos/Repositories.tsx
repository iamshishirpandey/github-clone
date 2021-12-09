import { gql } from "@apollo/client";

const GET_REPOSITORIES = gql`
  query GetRepos($userQuery: String!) {
    user(login: $userQuery) {
      repositories(isFork: false, first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
        pageInfo {
          endCursor
        }
        nodes {
          name
          updatedAt
          languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
            }
          }
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
