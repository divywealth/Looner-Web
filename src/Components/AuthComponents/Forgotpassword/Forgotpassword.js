import "./Forgotpassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Looner_Logo_Import from "../../../assets/image/L.jpeg";
import { useState } from "react";

const Forgotpassword = ({ toggleForgetpassword }) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassord] = useState("");
  const [showEmailSection, setShowEmailSecion] = useState(true);
  const [showCodeSection, setShowCodeSection] = useState(false);
  const [ResetPasswordSection, setResetPasswordSection] = useState(false);
  const Looner_Logo = Looner_Logo_Import;
  const VerifyEmail = () => {
    setShowEmailSecion(false);
    setShowCodeSection(true);
  };
  const verifyCode = () => {
    setShowCodeSection(false);
    setResetPasswordSection(true);
  };
  return (
    <div id="forgotPasswordBackdrop">
      <div id="forgotPasswordModal">
        <div id="forgotPassImageContainer">
          <div id="forgotPassIcon">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggleForgetpassword}
              size="lg"
              color="white"
            />
          </div>
          <div id="forgotPassImage">
            <img alt="Not Displaying" src={Looner_Logo} />
          </div>
        </div>

        {/* VerifyEmailSection */}
        {showEmailSection && (
          <section className="forgetPassBody" id="specialForgetPassBody">
            <span className="forgetPassHeader">Find your Looner account</span>
            <span className="forgetPassSubHeader">
              Enter the email associated with your account to change your
              password.
            </span>
            <section>
              <label className="forgetPassEmailLabel">Email</label>
              <input
                className="forgetPassEmailInput"
                placeholder="Email..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <div className="forgetPassNextButton" onClick={VerifyEmail}>
              <span>Get Code</span>
            </div>
          </section>
        )}

        {/* VerifyCodeSection */}
        {showCodeSection && (
          <section className="forgetPassBody">
            <span className="forgetPassHeader">Type in code</span>
            <span className="forgetPassSubHeader">
              A code has been sent to the email you specified, fill in the code.
            </span>
            <section>
              <label className="forgetPassEmailLabel">Code</label>
              <input
                id="forgetPassCodeInput"
                placeholder="Code..."
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </section>
            <div id="resetCodeNextButton" onClick={verifyCode}>
              <span>Verify Code</span>
            </div>
          </section>
        )}

        {ResetPasswordSection && (
          <section className="forgetPassBody">
            <span className="forgetPassHeader">Reset Password</span>
            <span className="forgetPassSubHeader">
              Write in your new password, try not to forget this one this time.
            </span>
            <section>
              <label className="forgetPassEmailLabel">Password</label>
              <input
                className="forgetPassEmailInput"
                placeholder="Password..."
                type="password"
                value={password}
                onChange={(e) => setPassord(e.target.value)}
              />
            </section>
            <div className="forgetPassNextButton">
              <span>Reset Password</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Forgotpassword;
