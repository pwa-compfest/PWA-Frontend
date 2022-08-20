import React, { useState, useEffect } from "react";
import LectureCardInstructor from "../../components/course-detail/LectureCardInstructor";
import QuizCardInstructor from "../../components/course-detail/QuizCardInstructor";
import Tabs from "../../components/Tabs";
import Toast from "../../components/Toast";
import { useNavigate, useParams } from "react-router-dom";
import ChangeVisibilityModal from "../../components/course-detail/ChangeVisibilityModal";
import DeleteCourseModal from "../../components/course-detail/DeleteCourseModal";
import axios from "../../api/axios";

function DetailCourseInstructor() {
  const [modalDisplay, setModalDisplay] = useState({ display: false });
  const [toastState, setToastState] = useState({ display: false });
  const [content, setContent] = useState("lecture");
  const [loadContent, setLoadContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("/images/placeholder.png");
  const [courseData, setCourseData] = useState([]);
  const [lectureList, setLectureList] = useState([]);
  const [quizList, setQuizList] = useState([]);
  let { courseId } = useParams();
  const navigate = useNavigate();

  function onEditLecture(item, idx) {
    for (let index = 0; index < lectureList.length; index++) {
      if (index === idx) {
        lectureList[index] = item;
      }
    }
    setLectureList([...lectureList]);
  }

  function onDeleteLecture(idx) {
    lectureList.splice(idx, 1);
    setLectureList(lectureList);
    setLoadContent(true);
    setModalDisplay({ display: false });
    setToastState({
      display: true,
      type: "success",
      content: "Lecture is deleted.",
    });
    setLoadContent(false);
  }

  function onDeleteQuiz(idx) {
    quizList.splice(idx, 1);
    setQuizList(quizList);
    setLoadContent(true);
    setModalDisplay(false);
    setToastState({
      display: true,
      type: "success",
      content: "Lecture is deleted.",
    });
    setLoadContent(false);
  }

  function onChangeVisibility() {
    courseData.is_public = !courseData.is_public;
    setCourseData(courseData);
  }

  function getImage(file) {
    axios
      .get(`/image/courses/${file}`)
      .then((res) => {
        setImage(res.data.url);
      })
      .catch((err) => {});
  }

  function getLectureList() {
    axios
      .get(`/lectures/${courseId}`)
      .then((res) => {
        setLectureList(res.data.data);
      })
      .catch((err) => {});
  }

  function getQuizList() {
    axios
      .get(`/quizzes/${courseId}`)
      .then((res) => {
        setQuizList(res.data.data);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/courses/instructor/${courseId}`)
      .then((res) => {
        setCourseData(res.data.data);
        getImage(res.data.data.image);
        getLectureList();
        getQuizList();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // UNAUTHORIZED
          navigate("/login");
        } else {
          // PAGE NOT FOUND
          navigate(`/instructor/dashboard`);
        }
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, []);

  if (!loading) {
    return (
      <section className="bg-white h-full w-full flex justify-center px-[35px] sm:px-[70px]">
        {toastState.display && (
          <Toast {...toastState} closeToast={setToastState} />
        )}
        {modalDisplay.content === "change-visibility" && (
          <ChangeVisibilityModal
            setMessage={setToastState}
            changeTo={courseData.is_public ? "private" : "publish"}
            setModalDisplay={setModalDisplay}
            contentTotal={lectureList.length}
            id={courseId}
            onChangeVisibility={onChangeVisibility}
          />
        )}

        {modalDisplay.content === "delete-course" && (
          <DeleteCourseModal
            setModalDisplay={setModalDisplay}
            id={courseId}
            setMessage={setToastState}
          />
        )}

        <div className="container relative">
          <img
            src={image}
            alt="course"
            className="w-full h-[200px] rounded-[24px] object-cover"
          />
          <div className="px-[80px] py-[80px] rounded-[24px] absolute top-36 bg-bright w-full">
            <div className="flex flex-row flex-wrap justify-between items-center xl:space-y-0 space-y-[40px] mb-[40px]">
              <div className="space-y-4 w-[800px]">
                <div className="flex flex-row items-center space-x-4">
                  <p className="xl:h2 h3">{courseData.title}</p>
                  <button
                    onClick={() =>
                      setModalDisplay({
                        display: true,
                        content: "change-visibility",
                      })
                    }
                    className="xl:h3 body text-error-500"
                  >
                    {courseData.is_public ? (
                      <div className="text-secondary-500">
                        <i class="fa-solid fa-globe" />
                      </div>
                    ) : (
                      <i class="fa-solid fa-lock"></i>
                    )}
                  </button>
                </div>
                <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
                  <button>
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    onClick={() =>
                      setModalDisplay({
                        display: true,
                        content: "delete-course",
                      })
                    }
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
                <div className="xl:subtitle body text-neutral-500 space-y-1">
                  <p>Instructor: {courseData.instructors.name}</p>
                  <p>Students: {courseData.totalStudent}</p>
                  <p className="body">{courseData.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Tabs
                data={[
                  { value: "lecture", label: "Lecture" },
                  { value: "quiz", label: "Quiz" },
                ]}
                setContent={setContent}
              />
              <button
                onClick={() =>
                  navigate(`/instructor/course/${courseData.id}/add-${content}`)
                }
                className="btn-icon-primary text-[30px] px-[10px] py-[6px] flex justify-center"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            {content === "lecture" &&
              !loadContent &&
              (lectureList.length > 0 ? (
                <div className="space-y-5 mt-[64px]">
                  {lectureList.map((item, index) => {
                    return (
                      <LectureCardInstructor
                        key={index}
                        idx={index}
                        item={item}
                        onEdit={onEditLecture}
                        onDelete={() => onDeleteLecture(index)}
                        setLoadContent={setLoadContent}
                        setMessage={setToastState}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="body space-y-5 mt-[64px]">
                  You Haven't Add Any Lecture
                </div>
              ))}
            {content === "quiz" &&
              !loadContent &&
              (quizList.length > 0 ? (
                <div className="space-y-5 mt-[64px]">
                  {quizList.map((item, index) => {
                    return (
                      <QuizCardInstructor
                        key={index}
                        item={item}
                        onEdit={() => navigate("/instructor/edit-quiz")}
                        onDelete={() => onDeleteQuiz(index)}
                        setLoadContent={setLoadContent}
                        setToastState={setToastState}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className="body space-y-5 mt-[64px]">
                  You Haven't Add Any Quiz
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default DetailCourseInstructor;
