import Menu from "../../Components/Menu/menu";
import "./SinglePost.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const posts = useSelector((state) => state.Foryou_Posts);
  const postId = useParams();
  const post = posts.find((eachPost) => eachPost.id == postId.post);

  console.log(post);
  return (
    <div className="singlepost-maincontainer">
      <Menu className="singlepost-menu" />
      <div className="singlepost-rightside">
        <div className="singlepost-toppost-section">
          <div className="singlepost-toppost-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
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
          <div className="singlepost-reaction-total">
            <img src="" alt="Not Displaying"/>
            <textarea />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
