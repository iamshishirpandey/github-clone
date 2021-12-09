import React from "react";

import "./App.css";

import { BrowserRouter, Route, Router } from "react-router-dom";

import "./constants/routes";
import { USERS, USER_REPOS } from "./constants/routes";
import Users from "./pages/Users/Users";
import Repositories from "./pages/Repos/Repositories";
const App: React.FC<any> = (props) => {
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("");
  const onTextChange = (text: string) => {
    setSearch(text);
  };
  return (
    <BrowserRouter>
      <div className="flex flex-col align-center items-center w-100%">
        <div className="flex align-center items-center">
          <div className="mt-1 relative flex items-center  mt-10">
            <input type="text" name="search" id="search" onChange={(e) => onTextChange(e.target.value)} className="mr-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" />
            <button type="button" onClick={() => setQuery(search)} className="inline items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Search
            </button>
          </div>
        </div>

        <Route
          exact
          path={USERS}
          component={() => {
            return <Users query={query} />;
          }}
        />
      </div>
      <Route
        exact
        path={USER_REPOS}
        component={() => {
          return <Repositories userQuery={""} />;
        }}
      />
    </BrowserRouter>
  );
};

export default App;
