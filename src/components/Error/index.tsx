import React from "react";

import "./style.css";
interface ErrorMessageProps {
  error: any;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <div className="ErrorMessage">
    <small>{error.toString()}</small>
  </div>
);

export default ErrorMessage;
