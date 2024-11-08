import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign In</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
          </label>{" "}
          <a href=""> Forgot password</a>
        </div>

        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have a profile yet ? <a href="">Create one</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};
