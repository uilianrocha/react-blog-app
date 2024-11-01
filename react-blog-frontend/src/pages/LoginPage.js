import "./css/LoginPage.css";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>Welcome to our Blog</h1>
      <p className="login-text">Please sign in to your account:</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
