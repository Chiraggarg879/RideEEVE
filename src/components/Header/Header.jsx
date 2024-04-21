import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function AddUser() {
  const location = useLocation();

  let heading = "";

  if (location.pathname === "/") {
    heading += "View Customers";
  } else if (location.pathname.startsWith("/view")) {
    heading += "View Single Customer";
  } else if (location.pathname.startsWith("/edit")) {
    heading += "Edit Customer Details";
  } else if(location.pathname.startsWith("/create")){
    heading += "Add Customer";
  }
  return (
    <div>
      <div>
        <h2>Hi! Super</h2>
      </div>
      <div>
        <div className="header-class">
          <div className="route-class mt-2">
            <p>{heading}</p>
          </div>
          <div className="btn-class">
            <div>
              <Link to="/create" className="btn add-btn my-3">
                Add New User
              </Link>
            </div>
            <div>
              <Link to="/" className="btn view-btn my-3 mx-1">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
