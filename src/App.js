import logo from "./logo.svg";
import "./App.css";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

// routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useState } from "react";

// firebase auth

import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isauth"));

  const onSignOut = () => {
    // call the method from firebase
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);

      // redirect to another page after logging out
      window.location.pathname = "/login";
    });
  };

  auth.currentUser && console.log(auth.currentUser.id);

  return (
    <Router>
      <nav>
        <Link to='/'>Home </Link>
        {isAuth && <Link to='/create-post'>Create </Link>}
        {!isAuth ? (
          <Link to='/login'>Login </Link>
        ) : (
          <button onClick={onSignOut} className='log-out-btn'>
            Log out
          </button>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/login' element={<Login login={setIsAuth} />} />
        <Route path='/create-post' element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
