import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import DetailCourseStudent from "./student/DetailCourseStudent";
import DetailCourseInstructor from "./instructor/DetailCourseInstructor";
import useAuth from "../context/AuthContext";

const DetailCourseManage = {
  STUDENT: {
    render(props) {
      return <DetailCourseStudent {...props} />;
    },
  },
  INSTRUCTOR: {
    render(props) {
      return <DetailCourseInstructor {...props} />;
    },
  },
};

function DetailCourse() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("/images/placeholder.png");
  const [courseData, setCourseData] = useState([]);
  const [lectureList, setLectureList] = useState([]);
  const [quizList, setQuizList] = useState([]);
  const { courseId } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // DELETE LATER
  const dummyQuizList = [
    {
      id: 4,
      course_id: 1,
      title: "Quiz 3",
      description: "Mathematics Quiz 3",
      total_questions: 2,
      createdAt: "2022-08-18T03:39:54.477Z",
      updatedAt: "2022-08-18T03:39:54.477Z",
      student_quizzes: [
        {
          quiz_result: 20,
          highest_score: 100,
        },
      ],
      total_student: 121,
    },
  ];

  // DELETE LATER
  const dummyLectureList = [
    {
      id: 1,
      course_id: 1,
      title: "Calculus IIA",
      url: "https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3",
    },
    {
      id: 2,
      course_id: 1,
      title: "Calculus IIA",
      url: "https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3",
    },
    {
      id: 3,
      course_id: 1,
      title: "Calculus IIA",
      url: "https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3",
    },
  ];

  function getImage(file) {
    axios
      .get(`/image/courses/${file}`)
      .then((res) => {
        console.log(res);
        setImage(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getLectureList() {
    axios
      .get(`/lectures/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setLectureList(res.data.data);
        // DELETE LATER
        setLectureList(dummyLectureList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getQuizList() {
    axios
      .get(`/quizzes/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setQuizList(res.data.data);
        // DELETE LATER
        setQuizList(dummyQuizList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setCourseData(res.data.data);
        getImage(res.data.data.image);
        getLectureList();
        getQuizList();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          // UNAUTHORIZED
          navigate("/");
        } else if (err.response.status === 404) {
          // PAGE NOT FOUND
          navigate("/");
        }
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return DetailCourseManage[currentUser.role].render({
      image,
      courseData,
      lectureList,
      quizList,
      courseId,
    });
  }
}

export default DetailCourse;
