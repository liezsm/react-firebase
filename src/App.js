import logo from "./logo.svg";
import "./App.css";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

// routing
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/create-post'>Create </Link>
        <Link to='/login'>Login </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
