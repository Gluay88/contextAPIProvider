import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <p>Navbar</p>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default Navbar;
