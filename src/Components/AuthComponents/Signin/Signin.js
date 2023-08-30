import "./Signin.css";
import PhoneNoInput from "./SigninInputs/PhoneNoInputs/PhoneNoInputs";
import PasswordInputs from "./SigninInputs/PasswordInputs/PasswordInputs";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Looner_Logo_Import from "../../../assets/image/L.jpeg";
import { useNavigate } from "react-router-dom";

const Signin = ({ func, handleCancelSignin, toggleForgetpassword }) => {
  const navigate = useNavigate();
  const Looner_Logo = Looner_Logo_Import;
  const [showPhoneInput, setshowPhoneInput] = useState(true);
  const [showPasswordInput, setshowPasswordInput] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const phoneNoVerified = (PhoneNo) => {
    if (PhoneNo === "") {
      throw Error("Phone No Empty");
    } else {
      setshowPhoneInput(false);
      setshowPasswordInput(true);
      setPhoneNo(PhoneNo);
      console.log(phoneNo);
    }
  };
  const SignIn = (Password) => {
    if (Password === "") {
      throw Error("Password Empty");
    } else {
      setPassword(Password);
      navigate("/");
    }
  };
  useEffect(() => {
    const runData = () => {
      const data = {
        phoneNo,
        password,
      };
      console.log(data);
    };
    runData();
  }, [password, phoneNo]);
  return (
    <div id="signInBackdrop">
      <div id="signInModal">
        <div id="imageContainer">
          <div id="font">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleCancelSignin}
              size="lg"
              color="white"
            />
          </div>
          <div id="img">
            <img alt="Not Displaying" src={Looner_Logo} />
          </div>
        </div>
        <span id="SignIn">Sign in to Looner</span>
        <div className="externalSignin">
          {/* Todo: Google Logo */}
          <span>Sign in with Google</span>
        </div>
        <div className="externalSignin">
          {/* Todo: Facebook Logo */}
          <span>Sign in with Facebook</span>
        </div>
        <section id="orSection">
          <div id="firstLine"></div>
          <div id="or">or</div>
          <div id="secondLine"></div>
        </section>
        {showPhoneInput && <PhoneNoInput phoneNoVerified={phoneNoVerified} />}
        {showPasswordInput && <PasswordInputs SignIn={SignIn} />}
        <div
          className="externalSignin"
          id="forgotPassword"
          onClick={toggleForgetpassword}
        >
          {/* Todo: Facebook Logo */}
          <span>Forgot Password?</span>
        </div>
        <div id="signup">
          <span>
            Don't have an account?
            <span id="Link" onClick={func}>
              Sign up
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
