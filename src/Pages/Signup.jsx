import { React, useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrbitProgress } from "react-loading-indicators";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!email || !password) {
      setError("Please fill in both fields!");
      toast.error("Please fill in both fields!");
      return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    toast.success("Signup successfully!", {
      style: {
        backgroundColor: "black",
        color: "white",
      },
    });

    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2500);

    console.log("Sign Up Form Submitted");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="signup-container">
        <h2 className="signup-title">SignUp Page</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
            Sign Up
          </button>
          <br />
          <p className="alternative-login-message">
            Already have an account? Please <Link to="/login">Login here</Link>.
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

export default Signup;
