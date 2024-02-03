import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/movies";
const Form = ({ isSignUp }) => {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);

  // const payload = {
  // 	username: "sudharsan31",
  // 	password: "#5ANbJ6df#Ci2Zz",
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted:", user);
    // login(user);
    const response = await login(user);
    console.log({ response });
    if (response) {
      navigate("/home");
    } else {
      alert("invalis email and password");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  // const { email, password } = values;
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="sign-text">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <Input
              name="username"
              type="text"
              label="Username"
              value={user.username}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
            />

            <div className="button-align">
              <Button
                size="x-large"
                color="white"
                rounded="rounded"
                bg="bg-1"
                value={isSignUp ? "Sign Up" : "Sign In"}
              />
            </div>
          </div>
        </form>
        <div className="checkbox">
          <div className="remember">
            <Input type="checkbox" className="check" />
            <p>Remember me</p>
          </div>
          {/* <a href="/">Need help?</a> */}
        </div>
        {isSignUp ? (
          <>
            <div className="new">
              <p>Already subscribed to netflix?</p>
              <Link to="/signin">Sign in</Link>
            </div>
          </>
        ) : (
          <>
            <div className="new">
              <p>New to Netflix?</p>
              <Link to="/signup">Sign up now</Link>
            </div>
            <div className="para">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
