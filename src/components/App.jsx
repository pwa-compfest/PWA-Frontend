import React from "react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/auth/forgot-password/ForgotPassword";
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
import DetailCourseInstructor from "../pages/instructor/DetailCourseInstructor";
import DetailCourseStudent from "../pages/student/DetailCourseStudent";

// Context
import { AuthContextProvider } from "../context/AuthContext";

// Route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import RestrictedRoute from "../routes/RestrictedRoute";

const ROLE = {
  STUDENT: "STUDENT",
  INSTRUCTOR: "INSTRUCTOR",
  ADMIN: "ADMIN",
};

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
          <Navbar />
          <div className="content h-[80vh]  mt-8">
            <Routes>
              <Route element={<RestrictedRoute />}>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  path="/password/verify/:token/:userId"
                  element={<ResetPassword />}
                />
                <Route path="/register/student" element={<RegisterStudent />} />
                <Route
                  path="/register/instructor"
                  element={<RegisterInstructor />}
                />
                <Route
                  path="/account/verify/:token/:userId"
                  element={<VerificationPage />}
                />
              </Route>

              <Route element={<ProtectedRoute role={ROLE.INSTRUCTOR} />}>
                <Route
                  path="/instructor/course/:courseId"
                  element={<DetailCourseInstructor />}
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
              </Route>

              <Route element={<ProtectedRoute role={ROLE.STUDENT} />}>
                <Route
                  path="/student/course/:courseId"
                  element={<DetailCourseStudent />}
                />
                <Route path="/home" element={<HomePage />} />
                <Route
                  path="/student/quiz/:courseId/:quizId"
                  element={<QuizStudent />}
                />
                <Route
                  path="/student/dashboard"
                  element={<DashboardStudent />}
                />
              </Route>

              <Route element={<ProtectedRoute role={ROLE.ADMIN} />}>
                <Route path="/admin/verify" element={<Verify />} />
              </Route>

              <Route path="*" element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      </AuthContextProvider>
    </Router>
  );
}
export default App;
