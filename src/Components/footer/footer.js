import "./footer.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Androidfooter = () => {
  return (
    <div className="footer-container">
      <ul>
        <li className="footer-icon-design">
          {" "}
          <FontAwesomeIcon icon={faHouse} />
        </li>
        <li className="footer-icon-design">
          {" "}
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <li className="footer-icon-design">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li className="footer-icon-design">
          {" "}
          <FontAwesomeIcon icon={faBell} />
        </li>
      </ul>
    </div>
  );
};

export default Androidfooter;
