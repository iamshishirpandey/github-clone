import { gql, useQuery } from "@apollo/client";

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
interface RepositoriesProps {
  userQuery: string;
}
const Repositories: React.FC<RepositoriesProps> = ({ userQuery }) => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { userQuery },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const {
    user: {
      repositories: { nodes: repos },
    },
  } = data;

  return (
    <div>
      {repos.map((repo: any) => (
        <div key={repo.name}>
          <h3>{repo.name}</h3>
          <p>Updated: {repo.updatedAt}</p>
          <p>Language: {repo.primaryLanguage?.name}</p>
          <p>Languages: {repo.languages.nodes.map((lang: any) => lang.name).join(", ")}</p>
        </div>
      ))}
    </div>
  );
};
export default Repositories;
