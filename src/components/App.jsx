import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/auth/forgot-password/ForgotPassword";
import EmailSent from "../pages/auth/forgot-password/EmailSent";
import ResetPassword from "../pages/auth/forgot-password/ResetPassword";
import RegisteredPage from "../pages/RegisteredPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import VerifyInstructor from "../pages/admin/VerifyInstructor";
import VerifyCourse from "../pages/admin/VerifyCourse";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterStudent from "../pages/auth/RegisterStudent";

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content h-[80vh]  mt-8">
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/registered" element={<RegisteredPage />} />
            <Route path="/register/student" element={<RegisterStudent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-password/email-sent" element={<EmailSent />} />
            <Route path="/forgot-password/reset" element={<ResetPassword />} /> 
            <Route exact path="/admin" element={<VerifyInstructor />} />
            <Route path="/admin/verify-instructor" element={<VerifyInstructor />} />       
            <Route path="/admin/verify-course" element={<VerifyCourse />} />       
            <Route path="/home" element={<HomePage />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App;
