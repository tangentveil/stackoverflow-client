import React, { useState } from "react";
import icon from "../../assets/login-icon.png";
import "./Auth.css";
import AboutAuth from "./AboutAuth";

import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)

    if (!email && !password) {
      alert("Enter email and password");
      setLoading(false)
    }

    // passing the input data to actions/auth.js
    if (isSignup) {
      setLoading(true);
      if (!name) {
        alert("Enter a name to continue");
        setLoading(false);
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section">
      {isSignup && <AboutAuth></AboutAuth>}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="icon" width={45} className="login-logo" />
        )}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p
                  style={{
                    color: "#007ac6",
                    fontSize: "13px",
                    marginTop: "1rem",
                  }}
                >
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain atleast eight <br /> characters,
                including 1 letter and 1 <br /> number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to recieve occasional, <br /> product updates, user
                research invitations, <br /> company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
            {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign up", you agree to our
              <span style={{ color: "#007ac6" }}>
                terms of <br />
                service
              </span>
              and <span style={{ color: "#007ac6" }}>privacy policy</span>
              and <span style={{ color: "#007ac6" }}> cookie policy.</span>
            </p>
          )}
        </form>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
