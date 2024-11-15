import { useState, useContext, FormEvent } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext.tsx";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext.tsx";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();
  // const { login } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");

    //Accesses the localStorage object
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user && email === user.email && password === user.password) {
        navigate("/home");
        setData(user);
      } else {
        alert("Invalid email or password.Please try again ");
      }
    } else {
      alert("No user found, Please create an account.");
    }
    //Set the INITIAL_DATA to the localStorage data again
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
