import Style from "../style/Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={Style.Navbar}>
      <NavLink to={"/Navbar"}>
        <h2 style={{ cursor: "pointer" }}>Home</h2>
      </NavLink>
      <NavLink to={"/DoneTask"}>
        <h2 style={{ cursor: "pointer" }}>Done task</h2>
      </NavLink>
      <NavLink to={"/DeletedTask"}>
        <h2 style={{ cursor: "pointer" }}>Deleted task</h2>
      </NavLink>

      <h2>Pending task </h2>
    </div>
  );
};

export default Navbar;
