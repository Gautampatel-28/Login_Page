import { React, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrbitProgress } from "react-loading-indicators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!email || !password) {
      setError("Please fill in both fields!");
      toast.error("Please fill in both fields!");
      return;
    }

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email !== storedEmail || password !== storedPassword) {
      setError("Invalid email or password!");
      toast.error("Invalid email or password!");
      return;
    }

    setError("");

    toast.success("Login successfully!", {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2500);

    console.log("Login Form Submitted");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login Page</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email:- </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />

          <div className="input-group">
            <label htmlFor="password">Password:- </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />

          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="input-button">
            Login
          </button>
          <br />
          <p className="alternative-login-message">
            If you don't have an account, please{" "}
            <Link to="/">sign up here</Link>.
          </p>
        </form>

        {loading && (
          <div className="loading-overlay">
            <OrbitProgress color="red" size="medium" text="" textColor="" />
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
