import { useState, useContext, FormEvent } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext.tsx";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Profile data is ", data);

    if (email === data.email && password === data.password) {
      navigate("/home");
    } else {
      alert("Invalid email or password.Please try again ");
    }
  };

  return (
    <div className="loginFormContainer">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label htmlFor="">
            <input type="checkbox" />
            Remember me
          </label>{" "}
          <a href="#"> Forgot password</a>
        </div>

        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have a profile yet ?{" "}
            <Link to="/create-profile">Create one</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};
