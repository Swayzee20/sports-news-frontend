import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">Page Not Found!</h3>
      <Link className="not-found__button" exact to="/">
        Back
      </Link>
    </div>
  );
}

export default PageNotFound;
