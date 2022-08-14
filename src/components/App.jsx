import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/ForgotPassword";
import RegisteredPage from "../pages/RegisteredPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content py-2 h-[80vh] md:h-[77.4vh] md:relative sm:px-[100px] mt-8">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
