import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import CircleProgressBar from "../../components/CircleProgressBar";
import LectureCardStudent from "../../components/course-detail/LectureCardStudent";
import QuizCardStudent from "../../components/course-detail/QuizCardStudent";
import Tabs from "../../components/Tabs";

function DetailCourseStudent() {
  const [content, setContent] = useState("lecture");
  const [studentProgress, setStudentProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("/images/placeholder.png");
  const [courseData, setCourseData] = useState([]);
  const [lectureList, setLectureList] = useState([]);
  const [quizList, setQuizList] = useState([]);
  const { courseId } = useParams();
  const navigate = useNavigate();

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
        return res.data.data.length;
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getStudentProgress() {
    axios
      .get(`/lectures/student-progress/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        if (res.data.data.visited_lecture !== null) {
          setStudentProgress(res.data.data.visited_lecture);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/courses/me/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        getStudentProgress();
        setCourseData(res.data.data.course);
        getImage(res.data.data.course.image);
        getLectureList();
        getQuizList();
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 401) {
          // UNAUTHORIZED
          navigate("/login");
        } else {
          // PAGE NOT FOUND
          navigate("/student/dashboard");
        }
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <section className="bg-white h-full w-full flex justify-center px-[35px] sm:px-[70px]">
        <div className="container relative">
          <img
            src={image}
            alt="course"
            className="w-full h-[200px] rounded-[24px] object-cover"
          />
          <div className="px-[80px] py-[80px] rounded-[24px] absolute top-36 bg-bright w-full">
            <div className="flex flex-row flex-wrap justify-between items-center xl:space-y-0 space-y-[40px] mb-[40px]">
              <div className="space-y-4 w-[800px]">
                <p className="xl:h2 h3">{courseData.title}</p>
                <div className="xl:subtitle body text-neutral-500 space-y-1">
                  {/*<p>Instructor: {courseData.instructors.name}</p>
                  <p>Students: {courseData.total_student}</p>*/}
                  <p className="body">{courseData.description}</p>
                </div>
              </div>
              <div className="min-w-[100px] max-w-[100px]">
                <CircleProgressBar
                  value={Math.floor(
                    (Object.keys(studentProgress).length / lectureList.length) *
                      100
                  )}
                />
              </div>
            </div>
            <Tabs
              data={[
                { value: "lecture", label: "Lecture" },
                { value: "quiz", label: "Quiz" },
              ]}
              setContent={setContent}
            />
            {content === "lecture" && (
              <div className="space-y-5 mt-[64px]">
                {lectureList.map((item, index) => {
                  return (
                    <LectureCardStudent
                      key={index}
                      id={index}
                      item={item}
                      courseId={courseId}
                      studentProgress={studentProgress}
                    />
                  );
                })}
              </div>
            )}
            {content === "quiz" && (
              <div className="space-y-5 mt-[64px]">
                {quizList.map((item, index) => {
                  return <QuizCardStudent key={index} item={item} />;
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default DetailCourseStudent;
