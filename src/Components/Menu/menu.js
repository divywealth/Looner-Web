import "./menu.css";
import Looner_Logo_Import from "../../assets/image/L.jpeg";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "../../assets/image/profile-pic.jpeg";

const Menu = () => {
  const Looner_Logo = Looner_Logo_Import;
  const profilePic = Img;
  return (
    <div id="leftSide">
      <div>
        <img src={Looner_Logo} alt="Not Displaying" id="looner-img" />
        <section id="menuList">
          <ul>
            <li className="icon-design">
              {" "}
              <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
            </li>
            <li className="icon-design">
              {" "}
              <FontAwesomeIcon icon={faSearch} /> <span>Search</span>
            </li>
            <li className="icon-design">
              {" "}
              <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
            </li>
            <li className="icon-design">
              {" "}
              <FontAwesomeIcon icon={faBell} /> <span>Notifiction</span>
            </li>
            <li className="icon-design"> 
              {" "}
              <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </li>
          </ul>
          <div id="post">Post</div>
        </section>
        <section className="ipad-section">
          <ul>
              <li className="ipad-icon-design">
                {" "}
                <FontAwesomeIcon icon={faHouse} />
              </li>
              <li className="ipad-icon-design">
                {" "}
                <FontAwesomeIcon icon={faSearch} />
              </li>
              <li className="ipad-icon-design">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />
              </li>
              <li className="ipad-icon-design">
                {" "}
                <FontAwesomeIcon icon={faBell} />
              </li>
              <li className="ipad-icon-design">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </li>
            </ul>
        </section>
      </div>
      
      <div id="lowerProfile">
        <img alt="Not Displaying" src={profilePic} />
        <div id="writing">
          <p id="name">Onuora Divine</p>
          <p id="username">@DivyBlaq</p>
        </div>
        <FontAwesomeIcon icon={faMinus} id="icon" />
      </div>
      <img alt="Not Displaying" src={profilePic} className="ipad-profile-image"/>
    </div>
  );
};

export default Menu;
