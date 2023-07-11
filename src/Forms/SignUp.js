import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { auth } from "./FirebaseServer";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "It should be a Valid email address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Enter Password",
      errorMessage:
        "Password should be a 8-20 characters and include at least, 1 letter , 1 number, 1 Special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&^*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "Confirm password",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't Match",
      pattern: inputValues.password,
      required: true,
    },
  ];
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  ///////Firebase authentication
  const handleRegister = async (e) => {
    e.preventDefault();

    /////// Firebase password authenticationn

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        updateProfile(user, {
          displayName: inputValues.email,
        });
        navigate("/");
      });
    } catch (error) {}
  };
  // console.log(inputValues);
  return (
    <div>
      <div>
        <div className="box">
          <div className="container">
            <div className="form-box">
              <form className="form">
                <span className="title">Sign up</span>
                <span className="subtitle">
                  Create a free account with your email.
                </span>
                <div className="form-container">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={inputValues[input.name]}
                      onChange={handleChange}
                    />
                  ))}
                  {/* <FormInput placeholder="Email" />
                  <FormInput placeholder="Password" />
                  <FormInput placeholder="Confirm Password" /> */}
                  {/* <input type="text" class="input" placeholder="Full Name" />
                  <input type="email" className="input" placeholder="Email" />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  /> */}
                </div>
                <button type="submit" onClick={handleRegister}>
                  Sign up
                </button>
              </form>
              <div class="form-section">
                <p>
                  Have an account?
                  <Link to={"/login"}>{""} Login</Link>
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
    </div>
  );
};

export default SignUp;
