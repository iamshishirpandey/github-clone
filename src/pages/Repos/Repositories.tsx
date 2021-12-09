// import { useQuery as useRouterQuery } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_REPOSITORIES = gql`
  query GetRepos($username: String!) {
    user(login: $username) {
      repositories(isFork: false, first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
        pageInfo {
          endCursor
        }
        nodes {
          name
          updatedAt
          forkCount
          url
          description
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
  const { username } = useParams<{ username: string }>();

  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { username },
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
      {/* {repos.map((repo: any) => (
        <div key={repo.name}>
          <h3>{repo.name}</h3>
          <p>Updated: {repo.updatedAt}</p>
          <p>Language: {repo.primaryLanguage?.name}</p>
          <p>Languages: {repo.languages.nodes.map((lang: any) => lang.name).join(", ")}</p>
        </div>
      ))} */}

      {repos.map((repo: any) => (
        <li key={repo.name}>
          <a href="#" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="text-sm font-medium text-indigo-600 truncate">{repo.name}</p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="truncate">{repo.updatedAt}</span>
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div>
                      <p className="text-sm text-gray-900">
                        {repo.stars} stars/{repo.forkCount} forks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </div>
  );
};
export default Repositories;
