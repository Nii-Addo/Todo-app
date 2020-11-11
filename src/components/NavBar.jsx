import React, { useContext } from "react";
import { NavBarWrapper } from "../styles/NavigationBar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../components/ThemeContext";
import { ThemeButton } from "../styles/Button";

const NavBar = (props) => {
  const themeContext = useContext(ThemeContext);
  return (
    <NavBarWrapper>
      <ul>
        <li className="brand">
          <Link to="/">
            <h3>TODO</h3>
          </Link>
        </li>
        <div className="right">
          <li className="">
            <Link to="/login">Login</Link>
          </li>
          <li className="">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="btn">
            <ThemeButton onClick={themeContext.toggleTheme}>Theme</ThemeButton>
          </li>
        </div>
      </ul>
    </NavBarWrapper>
  );
};

export default NavBar;
