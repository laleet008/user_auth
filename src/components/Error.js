import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h2>404</h2>
            <h3>SORRY FOR INCONVENIENCE, PAGE NOT FOUND </h3>
            <p>
              {" "}
              THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED OR HAD ITS
              HAVE CHANGED OR UNAVAILABLE
            </p>
            <NavLink to="/">Back to home page</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
