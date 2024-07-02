import React from "react";
import RouteGuard from "./guard";
import NavBar from "./navbar";

const HomePage = () => {

  return (
    <div>
      <NavBar />
      <h1>This is the homepage</h1>

      {/* <RouteGuard /> */}
    </div>
  );
};

export default HomePage;
