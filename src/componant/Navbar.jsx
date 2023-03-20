import React from "react";
import Style from "../style/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.Navbar}>
      <h2>Home</h2>
      <h2>Done task</h2>
      <h2>Pending task</h2>
      <h2>Deleted task</h2>
    </div>
  );
};

export default Navbar;
