import "./css/LoginPage.css";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="login-container">
      <h1>{isSignup ? "Create an Account" : "Welcome to our Blog"}</h1>
      <p className="login-text">
        {isSignup
          ? "Sign up for a new account:"
          : "Please sign in to your account:"}
      </p>

      {isSignup ? <SignupForm /> : <LoginForm />}

      <p className="toggle-text">
        {isSignup ? "Already have an account?" : "New to our blog?"}{" "}
        <button onClick={toggleForm} className="toggle-link">
          {isSignup ? "Login here" : "Create an account"}
        </button>
      </p>
    </div>
  );
};

export default LoginPage;


