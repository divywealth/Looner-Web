import Menu from "../../Components/Menu/menu";
import "./SinglePost.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Androidfooter from "../../Components/footer/footer";
import { useNavigate, useParams } from "react-router-dom";
import Img from "../../assets/image/profile-pic.jpeg";

const SinglePost = () => {
  const navigate = useNavigate()
  const profile_pic = Img
  const posts = useSelector((state) => state.Foryou_Posts);
  const postId = useParams();
  const post = posts.find((eachPost) => eachPost.id == postId.post);
  const GOBACK = () => {
    navigate(-1)
  };
  console.log(post);
  return (
    <div className="singlepost-maincontainer">
      <Menu className="singlepost-menu" />
      <div className="singlepost-rightside">
        <div className="singlepost-toppost-section">
          <div className="singlepost-toppost-icon">
            <FontAwesomeIcon icon={faArrowLeft} onClick={GOBACK}/>
          </div>
          <span className="singlepost-toppost-design">Post</span>
        </div>
        <div className="singlepost-downpost-section">
          <section className="user-section">
            <div className="user-section-username">
              <img
                src={post.user.profilepic}
                alt="not Displaying"
                className="user-section-image"
              />
              <div className="name-section">
                <p className="name">
                  {post.user.firstname} {post.user.lastname}
                </p>
                <span className="user-name">@{post.user.username}</span>
              </div>
            </div>
            <div className="user-section-icon">
              {" "}
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </section>
          <p className="post-text">{post.text}</p>
          <div className="singlepost-image">
            {post.image && <img src={post.image} alt="Not Displaying" />}
            <p>3:27 PM · Aug 27, 2023</p>
          </div>
          <div className="singlepost-reaction-total">
            <span>306 Comments</span>
            <span>306 Likes</span>
          </div>
          <div className="singlepost-reaction-total">
            <FontAwesomeIcon icon={faComment} className="singlepost-reaction-icon-comment"/>
            <FontAwesomeIcon icon={faHeart} className="singlepost-reaction-icon-like"/>
          </div>
          <div className="singlepost-reaction-comment">
            <div className="singlepost-user-image-container"><img src={profile_pic} alt="Not Displaying" className="singlepost-user-image"/></div>
            <textarea className="singlepost-textarea" placeholder="Post your reply!"/>
            <div className="singlepost-reply-comment">Reply</div>
          </div>

          <section className="singlepost-comment-section">
            <div className="singlepost-comment-left">
              <img src={profile_pic} alt="Not Displaying"/>
            </div>
            <div className="singlepost-commet-right">
              <div className="singlepost-comment-user-section">
                <div className="user-identity">
                  <span>Divine Christian</span>
                  <span>@Divyblaq</span>
                </div>
                <FontAwesomeIcon icon={faMinus} className="user-menu"/>
              </div>
              <span className="singlepost-comment">
                Them suppose win normally because this lineup dey very scary on a norms sha
              </span>
              <div className="singlepost-comment-reaction-section"></div>
            </div>
          </section>
        </div>
        <footer className="singlepost-android-footer">
          <Androidfooter />
        </footer>
      </div>
    </div>
  );
};

export default SinglePost;
