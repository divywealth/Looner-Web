import "./Whatshappening.css";
import Img from "../../assets/image/profile-pic.jpeg";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Whatshappening = () => {
  const profilePic = Img;
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [filename, setFilename] = useState("");
  useEffect(() => {
    const showFile = () => {
        console.log(filename)
    }
    showFile()
  }, [filename])
  console.log(filename);
  return (
    <div id="mainWHpage">
      <div id="imgSection">
        <img src={profilePic} alt="Not Displaying" />
      </div>
      <div id="postSection">
        <textarea
          type="text"
          placeholder="What is happening?!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/*<div>
          {image && (
            <div>
              <img src={image} alt="Not Showing" className="post-image" ng-if="image=='image'"/>
              <video height="200px" width="200px">
                <source src={image} ng-if="image=='video'"/>
              </video>
            </div>
          )}
          </div>*/}
        <div className="file-post-section">
          <div className="image-upload">
            <form method="POST" encType="multipart/form-data">
                <label htmlFor="file-input">
                <FontAwesomeIcon icon={faImage} id="icon" />
                </label>
                <input
                id="file-input"
                accept="image/*, video/*"
                type="file" 
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                />
            </form>
          </div>
          <div className="post">Post</div>
        </div>
      </div>
    </div>
  );
};

export default Whatshappening;
