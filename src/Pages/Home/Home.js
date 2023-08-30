import "./Home.css";
import { Link } from "react-router-dom"
import Img from "../../assets/image/profile-pic.jpeg";
import Menu from "../../Components/Menu/menu";
import Whatshappening from "../../Components/Whatshappening/Whatshappening";
import BodySection from "../../Components/Body-Section/Body-Section";
import Looner_Logo_Import from "../../assets/image/L.jpeg";
import Androidfooter from "../../Components/footer/footer";
import { useSelector} from "react-redux";
import { useState } from "react";
import JustTest from './../../ForYou.js'

const Home = () => {
  const Foryou_Posts = useSelector((state) => state.Foryou_Posts)
  const [Following_Posts] = useState(JustTest)
  const profile_pic = Img;
  const Looner_logo = Looner_Logo_Import;
  const [showForYouPage, setShowForYouPage] = useState(true);
  const [showFollowingPage, setShowFollowingPage] = useState(false);
  const toggleForYouPage = () => {
    setShowForYouPage(true);
    setShowFollowingPage(false);
  };
  const toggleFollowingPage = () => { 
    setShowFollowingPage(true);
    setShowForYouPage(false);
  };
  
  return (
    <div id="mainContainer">
      <Menu className="menu"/>
      <div id="rightSide">
        <section id="homeTop">
          <p className="Home">Home</p>

          {/*Android */}
          <div className="android-top-section">
            <div className="profile-pic-android"><img src={profile_pic} alt="Not displaying" /></div>
            <div className="looner-logo-android"><img src={Looner_logo} alt="Not displaying" /></div>
          </div>

          <section id="postsSelection">
            <div id="forYou" className="design" onClick={toggleForYouPage}>
              For you
            </div>
            <div
              id="Following"
              className="design"
              onClick={toggleFollowingPage}
            >
              Following
            </div>
          </section>
        </section>

        <main id="body">
          <section>
            <Whatshappening />
          </section>
          {/*ForYou Page */}
          {showForYouPage && (
            <section className="foryou-body">
              {Foryou_Posts.map((post) => (
                <Link to={`/${post.id}`} className="Link"><BodySection page={post} key={post.id} /></Link>
              ))}
            </section>
          )}

          {/*Following Page */}
          {showFollowingPage && (
            <section className="following-body">
              {Following_Posts.map((post) => (
                <BodySection page={post} key={post.id}/>
              ))}
            </section>
          )}
        </main>

        <footer className="android-footer">
          <Androidfooter />
        </footer>
      </div>
    </div>
  );
};

export default Home;
