import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import logo from '/assets/logo.png'

const NavBar = () => {
  let location = useLocation();

  let nav

  switch (location.pathname) {
    case "/":
      nav = <>
        <Link to="/signin">Sign In</Link>
        <Link className="startbutton" to="/signup">Get Started</Link>
      </>
      break;
    case "/signin":
      nav = <>
        <Link className="startbutton" to="/signup">Sign Up</Link>
      </>
      break;
    case "/signup":
    case "/setgoal":
      nav = <>
        <Link className="startbutton" to="/signin">Sign In</Link>
      </>
      break;
    default:
      nav = <>
        <Link to="/user/activities">My Activity</Link>
        <Link to="/user/dashboard">Dashboard</Link>
        <Link className="settingbutton" to="/user/setting">Setting</Link>
      </>
      break;
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt='logo' />
          EXTRACKS
        </Link>
        <nav>
          {nav}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
