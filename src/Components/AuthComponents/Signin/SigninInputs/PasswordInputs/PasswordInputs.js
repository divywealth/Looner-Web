import { useState } from "react";
import "./PasswordInputs.css";

const PasswordInputs = ({ SignIn }) => {
  const [password, setPassword] = useState("");
  return (
    <div>
      <section>
        <label id="label">Password</label>
        <input
          id="inputPhone"
          placeholder="Password..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>
      <div
        className="externalSignin"
        id="next"
        onClick={() => SignIn(password)}
      >
        {/* Todo: Facebook Logo */}
        <span>Sign In</span>
      </div>
    </div>
  );
};

export default PasswordInputs;
