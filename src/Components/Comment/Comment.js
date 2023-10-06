import "./Comment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Comment = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.Foryou_Posts);
  const postId = useParams();
  const post = posts.find((eachPost) => eachPost.id == postId.post);
  const GOBACK = () => {
    navigate(-1)
  };
  return (
    <div className="comment-backdrop">
      <div className="comment-modal">
        <FontAwesomeIcon icon={faXmark} className="comment-cancel-icon" onClick={GOBACK}/>
        <section className="comment-image-section">
          <div>
            <img
              src={post.user.profilepic}
              alt="Not Displaying"
              className="comment-image"
            />
          </div>
          <div>
            <div className="comment-identity">
              <span className="comment-name">
                {post.user.firstname} {post.user.lastname}
              </span>
              <span className="comment-username">@{post.user.username}</span>
            </div>
            <div className="comment-post">
              <span>{post.text}</span>
            </div>
          </div>
        </section>
        <section className="reply-textarea-section">
          <img
            src={post.user.profilepic}
            alt="Not displayng"
            className="comment-image-textarea"
          />
          <div className="textarea">
            <textarea placeholder="Post your comment!" />
          </div>
        </section>
        <section className="comment-post-section">
          <div className="comment-post-button">Reply</div>
        </section>
      </div>
    </div>
  );
};

export default Comment;
