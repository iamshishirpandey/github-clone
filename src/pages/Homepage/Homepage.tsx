import React from "react";
import Button from "../../components/Button/Button";
import SearchField from "./SearchField";
interface HomepageProps {
  history: any;
}

const Homepage: React.FC<HomepageProps> = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex align-center">
        <SearchField />
        <Button className="mt-2 w-50%" type="button">
          Search
        </Button>
      </div>
      <div className="text-lg">Users</div>
    </div>
  );
};
export default Homepage;
