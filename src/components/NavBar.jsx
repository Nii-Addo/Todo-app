import React, { useContext } from "react";
import { NavBarWrapper } from "../styles/NavigationBar";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeButton } from "../styles/Button";

const NavBar = (props) => {
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);
  return (
    <NavBarWrapper>
      <ul>
        <li className="brand">
          <Link to="/">
            <h3>TODO</h3>
          </Link>
        </li>
        <div className="right">
          {!authContext.isAuthenticated() ? (
            <>
              <li className="">
                <Link to="/login">Login</Link>
              </li>
              <li className="">
                <Link to="/signup">Signup</Link>
              </li>
            </>
          ) : (
            <button onClick={authContext.logout}>Logout</button>
          )}
          <li className="btn">
            <ThemeButton onClick={themeContext.toggleTheme}>Theme</ThemeButton>
          </li>
        </div>
      </ul>
    </NavBarWrapper>
  );
};

export default NavBar;
