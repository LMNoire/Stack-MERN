import "./Login.css";
import assets from "../../assets/assets";

const Login = () => {
  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2>Sign Up</h2>
      </form>
    </div>
  );
};

export default Login;
