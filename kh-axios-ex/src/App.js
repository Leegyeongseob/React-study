import logo from "./logo.svg";
import "./App.css";
import Axios from "./Axios";
import News from "./News";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import UserStore from "./context/UserStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </UserStore>
  );
}

export default App;
