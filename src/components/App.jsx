import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/auth/forgot-password/ForgotPassword";
import EmailSent from "../pages/auth/forgot-password/EmailSent";
import ResetPassword from "../pages/auth/forgot-password/ResetPassword";
import VerificationPage from "../pages/auth/verify-account/VerificationPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Verify from "../pages/admin/Verify";
import HomePage from "../pages/HomePage";
import RegisterStudent from "../pages/auth/register/RegisterStudent";
import RegisterInstructor from "../pages/auth/register/RegisterInstructor";
import DashboardInstructor from "../pages/DashboardInstructor";
import QuizStudent from "../pages/student/QuizStudent";
import AddQuiz from "../pages/instructor/AddQuiz";
import AddLecture from "../pages/AddLecture";
import AddCourse from "../pages/AddCourse";
import DashboardStudent from "../pages/DashboardStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { CookiesProvider } from "react-cookie";
import DetailCourse from "../pages/DetailCourse";
function App() {
  return (
    <CookiesProvider>
      <AuthContextProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content h-[80vh]  mt-8">
              <Routes>
                <Route path="/course/:courseId" element={<DetailCourse />} />
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route
                  path="/account/verify/:token/:userId"
                  element={<VerificationPage />}
                />
                <Route path="/register/student" element={<RegisterStudent />} />
                <Route
                  path="/register/instructor"
                  element={<RegisterInstructor />}
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/forgot-password/email-sent"
                  element={<EmailSent />}
                />
                <Route
                  path="/forgot-password/reset"
                  element={<ResetPassword />}
                />
                <Route path="/admin/verify" element={<Verify />} />

                <Route path="/home" element={<HomePage />} />
                <Route
                  path="/student/quiz/:courseId/:quizId"
                  element={<QuizStudent />}
                />
                <Route
                  path="/student/dashboard"
                  element={<DashboardStudent />}
                />
                <Route
                  path="/instructor/dashboard"
                  element={<DashboardInstructor />}
                />
                <Route
                  path="/instructor/course/:courseId/add-lecture"
                  element={<AddLecture />}
                />
                <Route
                  path="/instructor/course/:courseId/add-quiz"
                  element={<AddQuiz />}
                />
                <Route path="/instructor/add-course" element={<AddCourse />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AuthContextProvider>
    </CookiesProvider>
  );
}
export default App;
