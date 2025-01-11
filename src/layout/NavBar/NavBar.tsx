import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/">
          <img src="/favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <span className="text-logo">
            Rick & Morty <span className="text-success">WiKi</span>
          </span>
        </Link>
        <form className="d-flex" role="search"></form>
      </div>
    </nav>
  );
};

export default NavBar;
