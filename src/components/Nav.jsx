import { Link } from "react-router-dom";
import logo from "../assets/chillflix-logo.png"

function Nav() {
  return (
    <nav>
      <div className="nav__row">
        <Link to="/">
          <figure>
            <img src={logo} alt="Chill Flix Logo" className="nav__logo--img" />
          </figure>
        </Link>
        <ul className="nav__link--list">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="nav__link nav__link--main">
              Browse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
