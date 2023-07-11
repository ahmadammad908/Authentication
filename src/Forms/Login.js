import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./FirebaseServer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "INvalid Email",
    password: "invalid Passwp",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handlelogin = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          // ...
          navigate("/");
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(inputs);
  return (
    <div>
      <div className="box">
        <div className="container">
          <div className="form-box">
            <form className="form">
              <span className="title">Login</span>
              <span className="subtitle">
                Create a free account with your email.
              </span>
              <div className="form-container">
                <input
                  type={"email"}
                  name="email"
                  id="email"
                  className="input"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />{" "}
                <input
                  type={"password"}
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="input"
                  placeholder="Enter Password"
                  required
                />
                {/* <input type="email" className="input" placeholder="Email" />
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                /> */}
              </div>
              <button type="submit" onClick={handlelogin}>
                Login
              </button>
            </form>
            <div class="form-section">
              <p>
                Don't Have an account
                <Link to={"/signup"}>{""}Sign up</Link>
              </p>
              <h1 style={{ background: "red", padding: "10px" }}>
                <Link
                  to={"#"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login With Google
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
