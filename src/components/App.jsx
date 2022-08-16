import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/auth/forgot-password/ForgotPassword";
import EmailSent from "../pages/auth/forgot-password/EmailSent";
import ResetPassword from "../pages/auth/forgot-password/ResetPassword";
import RegisteredPage from "../pages/RegisteredPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Verify from "../pages/admin/Verify";
import HomePage from "../pages/HomePage";
import RegisterStudent from "../pages/auth/RegisterStudent";
import RegisterInstructor from "../pages/auth/RegisterInstructor";
import RequestSent from "./RequestSent";
import DashboardInstructor from "../pages/DashboardInstructor";
import QuizStudent from "../pages/student/QuizStudent";
import AddQuiz from "../pages/instructor/AddQuiz";
import AddLecture from "../pages/AddLecture";
import AddCourse from "../pages/AddCourse";
import DetailCourseStudent from "../pages/student/DetailCourseStudent";
import DashboardStudent from "../pages/DashboardStudent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
            <Route path="/register/instructor" element={<RegisterInstructor />} />
            <Route path="/register/instructor/request-sent" element={<RequestSent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgot-password/email-sent" element={<EmailSent />} />
            <Route path="/forgot-password/reset" element={<ResetPassword />} /> 
            <Route path="/admin/verify" element={<Verify />} />      
            <Route path="/student/quiz" element={<QuizStudent />} />"   
            <Route path="/home" element={<HomePage />} />
            <Route path="/student/dashboard" element={<DashboardStudent />} />
            <Route path="/instructor/dashboard" element={<DashboardInstructor />} />
            <Route path="/instructor/add-lecture" element={<AddLecture />} />
            <Route path="/instructor/add-quiz" element={<AddQuiz />} /> 
            <Route path="/instructor/add-course" element={<AddCourse />} />
            <Route path="/instructor/dashboard" element={<DashboardInstructor />} />
            <Route path="/student/course" element={<DetailCourseStudent />} />
            <Route path="/student/dashboard" element={<DashboardStudent />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App;
