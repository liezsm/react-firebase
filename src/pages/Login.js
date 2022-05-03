import React from "react";

// use the google auth when butotn click

import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

// routing
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
  let navigate = useNavigate();

  const signInWithGoggle = () => {
    signInWithPopup(auth, provider).then((res) => {});
    // to ddetermine if logged in
    localStorage.setItem("isauth", true);
    login(true);
    // after logging in redirecct to home page
    navigate("/");
  };
  return (
    <div className='loginPage'>
      <p>Sign in with Google</p>
      <button className='login-with-google' onClick={signInWithGoggle}>
        Sign in With Google
      </button>
    </div>
  );
};

export default Login;
