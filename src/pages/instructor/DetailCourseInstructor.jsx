import React, { useState } from "react";
import LectureCardInstructor from "../../components/course-detail/LectureCardInstructor";
import QuizCardInstructor from "../../components/course-detail/QuizCardInstructor";
import Tabs from "../../components/Tabs";
import Toast from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import ChangeVisibilityModal from "../../components/course-detail/ChangeVisibilityModal";
import DeleteCourseModal from "../../components/course-detail/DeleteCourseModal";

function DetailCourseInstructor({
  image,
  courseData,
  lectureList,
  quizList,
  courseId,
}) {
  const [modalDisplay, setModalDisplay] = useState({ display: false });
  const [toastState, setToastState] = useState({ display: false });
  const [content, setContent] = useState("lecture");
  const navigate = useNavigate();
  const contentTotal = lectureList.length + quizList.length;
  const [isPublic, setIsPublic] = useState(courseData.is_public);

  return (
    <section className="bg-white h-full w-full flex justify-center px-[35px] sm:px-[70px]">
      {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
      {modalDisplay.content === "change-visibility" && (
        <ChangeVisibilityModal
          setMessage={setToastState}
          changeTo={isPublic ? "private" : "public"}
          setModalDisplay={setModalDisplay}
          contentTotal={contentTotal}
          id={courseId}
          onChangeVisibility={() => setIsPublic(!isPublic)}
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
                  {isPublic && contentTotal > 0 ? (
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
                    setModalDisplay({ display: true, content: "delete-course" })
                  }
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
              <div className="xl:subtitle body text-neutral-500 space-y-1">
                <p>Instructor: {courseData.instructors.name}</p>
                <p>Students: {courseData.total_student}</p>
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
            (lectureList.length > 0 ? (
              <div className="space-y-5 mt-[64px]">
                {lectureList.map((item, index) => {
                  return (
                    <LectureCardInstructor
                      key={index}
                      id={index}
                      title={item.title}
                      url={item.url}
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
            (quizList.length > 0 ? (
              <div className="space-y-5 mt-[64px]">
                {quizList.map((item, index) => {
                  return (
                    <QuizCardInstructor
                      key={index}
                      id={index}
                      item={item}
                      onEdit={() => navigate("/instructor/edit-quiz")}
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

export default DetailCourseInstructor;
