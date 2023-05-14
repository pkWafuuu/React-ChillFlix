import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__row">
        <a href="">
          <figure>
            <img src="" alt="Chill Flix Logo" className="nav__logo--img" />
          </figure>
        </a>
        <ul className="nav__link--list">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="nav__link">
              Trending
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
