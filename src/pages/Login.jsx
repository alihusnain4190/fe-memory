import React, { useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, navigate } from "@reach/router";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const hanleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      const result = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/");
    } catch {
      setError("filed to login");
    }
    setLoading(false);
  };
  
  return (
    <>
      <h2 className="login-h2">Login</h2>

      {error && <strong variant="danger">{error}</strong>}
      <form onSubmit={hanleSubmit} className="login">
        <div className="login-label-input-wrapper">
          <label id="email" className="login__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            className="login__input"
          ></input>
        </div>
        <div className="login-label-input-wrapper">
          <label id="password" className="login__label">
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            className="login__input"
          ></input>
        </div>
        <div>
          {" "}
          <button
            disabled={loading}
            className="btn login__sign__login__btn"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="signup__login__link">
        Need a account
        <Link to="/signup">sign up</Link>
      </div>
    </>
  );
};
export default Login;
