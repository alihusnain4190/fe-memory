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
      console.log("lasd");
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
      console.log("erro");
      setError("filed to create login");
    }
    setLoading(false);
  };
  return (
    <>
      <h2 className="signup-h2">Sign Up</h2>

      {error && <strong variant="danger">{error}</strong>}
      <form onSubmit={hanleSubmit} className="signup">
        <div className="signup-label-input-wrapper">
          <label id="email" className="signup__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            className="signup__input"
          ></input>
        </div>
        <div className="signup-label-input-wrapper">
          <label id="password" className="signup__label">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            className="signup__input"
          ></input>
        </div>
        <div className="signup-label-input-wrapper">
          <label id="password-confirm" className="signup__label">
            Confirm Password{" "}
          </label>
          <input
            type="password-confirm"
            id="password-confirm"
            name="password-confirm"
            ref={passwordConfirmRef}
            className="signup__input"
          ></input>
        </div>
        <div>
          <button
            className="btn signup__signin__btn"
            disabled={loading}
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="signup__login__link">
        Already have a account?
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};
export default Signup;
