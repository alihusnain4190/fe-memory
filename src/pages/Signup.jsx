import React, { useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, navigate } from "@reach/router";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const hanleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password not match");
    }
    try {
      setError("");
      setLoading(true);
      const result = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/");
    } catch {
      setError("please Fill all form field");
    }
    setLoading(false);
  };
  return (
    <>
      <h2 className="signup-h2 signup-login-header">Sign Up</h2>

      {/* {error && (
        <strong variant="danger" className="error__signup">
          {error}
        </strong>
      )} */}
      <form onSubmit={hanleSubmit} className="signup">
        <div className="row">
          <div className="col-25">
            <label htmlFor="username">Email:</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              required
              name="email"
              ref={emailRef}
              className="signup__input"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Password:</label>
          </div>
          <div className="col-75">
            <input
              required
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              className="signup__input"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="passwordConf">Repeat Password:</label>
          </div>
          <div className="col-75">
            <input
              required
              id="password-confirm"
              name="password-confirm"
              type="password"
              placeholder="Repeat Password"
              ref={passwordConfirmRef}
              className="signup__input"
            ></input>
          </div>
        </div>
        <button
          className="sign-up-login-btn center"
          disabled={loading}
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <div className="signup__login__link">
        Already have a account?
        <Link
          className="link_login_signup center"
          style={{ textDecoration: "none" }}
          to="/login"
        >
          Login
        </Link>
      </div>
    </>
  );
};
export default Signup;
