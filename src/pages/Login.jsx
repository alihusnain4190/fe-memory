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
      <h2 className="signup-h2 signup-login-header">Login</h2>

      {error && <strong variant="danger">{error}</strong>}
      <form onSubmit={hanleSubmit} className="login">
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

        <button
          className="sign-up-login-btn center"
          disabled={loading}
          type="submit"
        >
          Login
        </button>
      </form>

      <div className="signup__login__link">
        Need a account
        <Link to="/signup" className="link_login_signup center">
          sign up
        </Link>
      </div>
    </>
  );
};
export default Login;
