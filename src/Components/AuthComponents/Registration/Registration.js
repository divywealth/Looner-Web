import "./Registration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = ({ handleCancelCreateAccount }) => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [firstSection, setFirstSection] = useState(true);
  const [secondSection, setSecondSection] = useState(false);
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    password: null,
    confirmPassword: null,
  });
  const handleRegistration = (e) => {
    e.preventDefault();
    try {
      if (password < 5) {
        setErrors({ password: "Password must be atleast 6 chars long" });
        return;
      } else if (password !== confirmPassword) {
        setErrors({
          confirmPassword: "Confirm password must be same as password",
        });
        return;
      }
      navigate("/");
    } catch (e) {
      throw e.message;
    }
  };
  const showSecondSection = (e) => {
    e.preventDefault();
    setFirstSection(false);
    setSecondSection(true);
  };
  return (
    <div id="regBackdrop">
      <div id="regModal">
        <div id="fontContainer">
          <div id="font">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleCancelCreateAccount}
              size="lg"
              color="white"
            />
          </div>
          {firstSection && <span className="steps">Step 1 of 2</span>}
          {secondSection && <span className="steps">Step 2 of 2</span>}
        </div>
        <div id="modalContainer">
          <span id="SignIn">Create your account</span>
          {firstSection && (
            <form className="inputSection" onSubmit={showSecondSection}>
              <input
                placeholder="Firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                placeholder="Lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                placeholder="Phone No"
                type="text"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
              <button className="SignupNext">
                <span>Next</span>
              </button>
            </form>
          )}

          {/*Second Section */}
          {secondSection && (
            <form className="inputSection" onSubmit={handleRegistration}>
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <div className="formError">{errors.password}</div>
              )}
              <input
                placeholder="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errors.confirmPassword && (
                <div className="formError">{errors.confirmPassword}</div>
              )}
              <button className="SignupNext">
                <span>Next</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
