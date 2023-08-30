import { useEffect, useState } from "react";
import Menu from "../../Components/Menu/menu";
import "./SinglePost.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const posts = useSelector((state) => state.Foryou_Posts);
  const postId = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const GetUserPost = () => {
      const singelPost = posts.find((eachPost) => eachPost.id == postId.post);
      setPost(singelPost);
    };
    GetUserPost();
  }, []);
  console.log(post)
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
                <img src={post.image} alt="not Displaying" className="user-section-image" />
                <div className="user-section-username">
                    <span className="name">{post.user.firstname} {post.user.lastname}</span>
                    <span className="user-name"></span>
                </div>
                <div className="user-section-icon"> <FontAwesomeIcon icon={faMinus}/></div>
            </section>
            <span className="post-text">{post.text}</span>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
