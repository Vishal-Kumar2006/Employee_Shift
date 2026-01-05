import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="Navbar">
      <h2 className="navbar-part">XYZ Company</h2>
      <div className="navbar-part">
        {user ? (
          <>
            <a href="/user/profile">{user.name}</a>
          </>
        ) : (
          <>
            <a href="/user/sign-up">Sign Up</a>
            <a href="/user/login">Login</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
