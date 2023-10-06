import { useState } from "react";
import "./Auth.css";
import Registration from "../../Components/AuthComponents/Registration/Registration";
import Signin from "../../Components/AuthComponents/Signin/Signin";
import Looner_Logo_Import from "../../assets/image/L.jpeg";
import Looner_Image_Import from "../../assets/image/L.jpeg";
import Google_Image_Import from "../../assets/image/Google.jpeg";
import Facebook_Image_Import from "../../assets/image/Facebook-Icon-PNG-6.jpeg";
import Forgotpassword from "../../Components/AuthComponents/Forgotpassword/Forgotpassword";

const Auth = () => {
  const Looner_Logo = Looner_Logo_Import;
  const Looner_Image = Looner_Image_Import;
  const Google_Image = Google_Image_Import;
  const Facebook_Image = Facebook_Image_Import;
  const [showForgetpassword, setshowForgetpassword] = useState(false);
  const [showCreateAccount, setshowCreateAccount] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  //Mobile Phone 500px variables;
  const [showMobileCreateAccount, setshowMobileCreateAccount] = useState(false);
  const [showMobileLogin, setshowMobileLogin] = useState(true);
  const [showMobileForgotPassword, setMobileShowForgotPassword] =
    useState(false);
  const createAccount = () => {
    setshowCreateAccount(true);
  };
  const Login = () => {
    setshowLogin(true);
  };
  const toggleForgetpassword = () => {
    setshowLogin(false);
    setshowForgetpassword(!showForgetpassword);
  };
  const toggleMobileForgotPassword = () => {
    setshowMobileLogin(!showMobileLogin);
    setMobileShowForgotPassword(!showMobileForgotPassword);
  };
  const changeSigninToSignUp = () => {
    setshowLogin(false);
    setshowCreateAccount(true);
  };
  const changeSigninToSignupMobile = () => {
    setshowMobileLogin(false);
    setshowMobileCreateAccount(true);
  };
  const handleCancelSignin = () => {
    setshowLogin(false);
  };
  const handleCancelCreateAccount = () => {
    setshowCreateAccount(false);
  };
  const handleCancleMobileCreateAccount = () => {
    setshowMobileCreateAccount(false);
    setshowMobileLogin(true);
  };
  return (
    <div className="Body">
      <section className="laptopSection">
        {showCreateAccount && (
          <Registration handleCancelCreateAccount={handleCancelCreateAccount} />
        )}
        {showLogin && (
          <Signin
            func={changeSigninToSignUp}
            handleCancelSignin={handleCancelSignin}
            toggleForgetpassword={toggleForgetpassword}
            id="Signin"
          />
        )}
        {showForgetpassword && (
          <Forgotpassword toggleForgetpassword={toggleForgetpassword} />
        )}
        <div className="MainContainer">
          <div className="firstMainContainer">
            <img alt="Not Displaying" src={Looner_Image} />
          </div>
          <div className="secondMainContainer">
            <div className="imageContainer">
              <img alt="Not displaying" src={Looner_Logo} />
            </div>
            <div className="secondMainContainerContainer">
              <div className="firstText">
                <span>Happening now</span>
              </div>
              <div className="secondText">
                <span>Join Looner today.</span>
              </div>
              <div className="externalSignUp">
                <img alt="Not Displaying" src={Google_Image} id="googleImage" />
                <span>Sign up with Google</span>
              </div>
              <div className="externalSignUp">
                <img
                  alt="Not Displaying"
                  src={Facebook_Image}
                  id="facebookImage"
                />
                <span>Sign up with Facebook</span>
              </div>
              <section className="orSection">
                <div id="firstLine"></div>
                <div id="or">or</div>
                <div id="secondLine"></div>
              </section>
              <div
                className="externalSignUp"
                id="createAccount"
                onClick={createAccount}
              >
                <span>Create account</span>
              </div>
              <div className="policy">
                By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>. Make sure to read through.
              </div>
              <div className="account">
                <sapn>Already have an account?</sapn>
              </div>
              <div className="externalSignUp" id="signIn" onClick={Login}>
                <span>Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Width 500px for mobile hand Phone */}
      <section className="mobileSection">
        {showMobileLogin && (
          <Signin
            func={changeSigninToSignupMobile}
            toggleForgetpassword={toggleMobileForgotPassword}
          />
        )}
        {showMobileForgotPassword && (
          <Forgotpassword toggleForgetpassword={toggleMobileForgotPassword} />
        )}
        {showMobileCreateAccount && (
          <Registration
            handleCancelCreateAccount={handleCancleMobileCreateAccount}
          />
        )}
      </section>
    </div>
  );
};

export default Auth;
