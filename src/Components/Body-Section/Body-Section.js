import "./Body-Section.css";
import image from "../../assets/image/profile-pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const BodySection = ({ page }) => {
  const navigate = useNavigate();
  const profile = image;
  return (
    <div className="each-body-post">
      <div className="profile-pic-section">
        <img src={profile} alt="Not displaying" width="43px" height="43px" />
      </div>
      <div className="main-post-section">
        <div className="user-identity-section">
          <div>
            <span className="post-name">
              {page.user.firstname} {page.user.lastname}
            </span>
          </div>
          <div>
            <span className="post-username">@{page.user.username}</span>
            <span className="post-dot">·</span>
            <span className="post-username">23h</span>
          </div>
        </div>
        <div className="post-text-section">{page.text}</div>
        {page.image && (
          <img alt="No Pic" src={page.image} className="post-image-section" />
        )}
        <div className="reaction-section">
          <div className="comment">
            <Link to={`/compose/${page.id}`} style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon
                icon={faComment}
                className="reactions-numbers-comment"
              />
              <span className="reactions-numbers-comment">0</span>
            </Link>
          </div>
          <div className="like">
            <FontAwesomeIcon
              icon={faHeart}
              className="reactions-numbers-like"
            />
            <span className="reactions-numbers-like">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
