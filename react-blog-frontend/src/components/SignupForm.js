import React, { useState } from 'react';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const validateInputs = () => {
      if (username.length < 4) {
          setError("Username must be at least 4 characters long.");
          return false;
      }
      if (password.length < 6) {
          setError("Password must be at least 6 characters long.");
          return false;
      }
      if (!email.includes("@")) {
          setError("Enter a valid email address.");
          return false;
      }
      return true;
    };

    if (!validateInputs()) {
        setIsLoading(false);
        return;
    }

    try {
      console.log("Signing up with:", { username, password, email });

      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label htmlFor="username">
        Username:
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
          value={username}
          onChange={handleUsernameChange}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="signup-button" disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignupForm;

