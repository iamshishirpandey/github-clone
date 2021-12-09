import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { USER_REPOS } from "../../constants/routes";
const GET_USERS = gql`
  query SearchUsers($userQuery: String!) {
    search(query: $userQuery, type: USER, first: 20) {
      edges {
        node {
          ... on User {
            avatarUrl
            id
            login
            url
          }
        }
      }
    }
  }
`;
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
interface UsersProps {
  query: string;
}
const Users: React.FC<UsersProps> = ({ query }) => {
  const [getUsers, { loading: loadingUsers, data: userData }] = useLazyQuery(GET_USERS, {
    variables: { userQuery: query },
  });
  useEffect(() => {
    getUsers({ variables: { userQuery: query } });
    console.log(userData);
  }, [query]);

  // const [getRepositories, { loading: loadingRepositories, data: repositoryData }] = useLazyQuery(GET_REPOSITORIES, {
  //   variables: { userQuery: query },
  // });
  return (
    <div className="w-100%">
      <h1>Users</h1>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loadingUsers && <p>Loading...</p>}
        {userData &&
          userData.search.edges.map((user: any) => (
            <Link to={`${USER_REPOS}/?user=${user.node.login}`}>
              <li key={user.node.login} className="col-span-2 col-2 row-2 flex flex-grid text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="flex-1 flex flex-col p-8">
                  <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={user.node.avatarUrl} alt="" />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">{user.node.login}</h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dd className="text-gray-500 text-sm">{user.node.login}</dd>
                  </dl>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
export default Users;
