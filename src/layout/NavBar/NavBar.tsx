import Tranlation from "../../components/Translation/Translation";
import FlagSwitch from "../FlagSwitch/FlagSwitch";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

type Props = {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ isChecked, setIsChecked }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          <span className="text-logo">
            Rick & Morty <span className="text-success">WiKi</span>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                <Tranlation type="system" origin="Characters" />
              </NavLink>
            </li>
            <li className="nav-item ml-2">
              <NavLink className="nav-link" aria-current="page" to="/episodes">
                <Tranlation type="system" origin="Episodes" />
              </NavLink>
            </li>
          </ul>

          <FlagSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
