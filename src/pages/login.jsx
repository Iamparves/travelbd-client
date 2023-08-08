import React from "react";
import { Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import HeaderNavbar from "../components/Shared/HeaderNavbar/HeaderNavbar";
import { useUser } from "../contexts/UserContext";
import { googleSignIn, setJwtToken } from "../utils/LoginManager";

const Login = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialSignIn = async (signInMethod) => {
    try {
      const user = await signInMethod();
      setUser(user);
      setJwtToken();
      toast.success("Login Successful!");

      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    } catch (err) {
      setUser({
        isLoggedIn: false,
        error: err.message,
      });
    }
  };

  return (
    <>
      <HeaderNavbar />
      <section className="login">
        <Container>
          <div className="login__inner">
            <h2>Login</h2>
            {user.error && <p className="login__error">{user.error}</p>}
            <div className="login__social--box">
              <button
                onClick={() => handleSocialSignIn(googleSignIn)}
                className="login__social btn"
              >
                <img src="/img/icon/google.png" alt="Google" />
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Login;
