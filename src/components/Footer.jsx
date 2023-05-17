import { Link } from "react-router-dom";
import logo from "../assets/chillflix-logo.png";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="footer__container">
          <div className="footer__logo--container">
            <img src={logo} alt="chillflix" className="footer__logo" />
            <div className="footer__copyright">
              Copyright &copy; 2023 ChillFlix
            </div>
          </div>
          <div className="footer__links">
            <div className="footer__link">
              <Link to={"/browse"} className="nav__link">
                Browse
              </Link>
            </div>
            <div className="footer__link--divider"></div>
            <div className="footer__link">
              <a
                href="https://www.omdbapi.com/"
                target="_blank"
                className="nav__link"
              >
                API
              </a>
            </div>
            <div className="footer__link--divider"></div>
            <div className="footer__link">
              <a
                href="https://github.com/pkWafuuu/React-ChillFlix"
                target="_blank"
                className="nav__link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
