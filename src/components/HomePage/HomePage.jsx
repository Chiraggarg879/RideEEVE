import React from "react";
import ViewAllCustomers from "../ViewDetails/ViewDetails";
import AddUser from "../Header/Header";
import "./HomePage.css";

function Home() {
  return (
    <div className="container">
      <AddUser />
      <ViewAllCustomers />
    </div>
  );
}

export default Home;
