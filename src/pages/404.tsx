import React from "react";
import Button from "../components/Button/Button";

const Error404: React.FC = () => (
  <div className="flex flex-col flex-1 text-gray-500 items-center justify-center h-screen">
    <div className="flex flex-col m-4 w-1/4 text-center">
      <div className="text-base font-medium">Page Not Found</div>

      <Button className="mt-2" type="button">
        Go To Home
      </Button>
    </div>
  </div>
);

export default Error404;
