import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Thank You for Login Up!</h1>
        <p className="home-message">
          We are excited to have you on board! start exploring.
        </p>
        <div className="home-image-container">
          <img src="/images/right.png" alt="img" className="home-image" />
        </div>
        <button
          className="home-button"
          onClick={() => (window.location.href = "/login")}
        >
          Go to Login
        </button>
      </div>
    </>
  );
};

export default Home;
