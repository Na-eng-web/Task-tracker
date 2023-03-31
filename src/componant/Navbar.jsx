import React from "react";
import Style from "../style/Navbar.module.css";

const Navbar = ({ setopen }) => {
  return (
    <div className={Style.Navbar}>
      <h2 style={{ cursor: "pointer" }} onClick={() => setopen(0)}>
        Home
      </h2>
      <h2 style={{ cursor: "pointer" }} onClick={() => setopen(1)}>
        Done task
      </h2>
      <h2>Pending task</h2>
      <h2 style={{ cursor: "pointer" }} onClick={() => setopen(2)}>
        Deleted task
      </h2>
    </div>
  );
};

export default Navbar;
