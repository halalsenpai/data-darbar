import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top  navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Data Darbar
        </Link>
        <div>
          <Link to="CreateData" className="btn btn-light btn-auto ml-auto">
            Create Data
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
