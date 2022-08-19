import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import CircleProgressBar from "../../components/CircleProgressBar";
import LectureCardStudent from "../../components/course-detail/LectureCardStudent";
import QuizCardStudent from "../../components/course-detail/QuizCardStudent";
import Tabs from "../../components/Tabs";

function DetailCourseStudent({
  image,
  courseData,
  lectureList,
  quizList,
  courseId,
}) {
  const [content, setContent] = useState("lecture");
  const [studentProgress, setStudentProgress] = useState({
    percentage: 0,
    visited_lecture: [],
  });

  // DELETE LATER
  const dummyStudentProgress = {
    id: 1,
    course_id: 1,
    student_id: 101,
    visited_lecture: {
      1: true,
      2: false,
      3: true,
    },
  };

  function calcStudentProgress(visited_lecture) {
    let visited = 0;
    const total = Object.keys(visited_lecture).length;
    console.log(total);

    Object.keys(visited_lecture).forEach((lecture) => {
      if (visited_lecture[lecture]) {
        visited += 1;
      }
    });

    return Math.floor((visited / total) * 100);
  }

  useEffect(() => {
    axios
      .get(`/lectures/student-progress/${courseId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // DELETE LATER
        const percentage = calcStudentProgress(
          dummyStudentProgress.visited_lecture
        );
        setStudentProgress({
          percentage: percentage,
          visited_lecture: dummyStudentProgress.visited_lecture,
        });
      });
    // eslint-disable-next-line
  }, []);

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
                <p>Instructor: {courseData.instructors.name}</p>
                <p>Students: {courseData.total_student}</p>
                <p className="body">{courseData.description}</p>
              </div>
            </div>
            <div className="min-w-[100px] max-w-[100px]">
              <CircleProgressBar value={studentProgress.percentage} />
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
                    viewed={studentProgress.visited_lecture[item.id]}
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

export default DetailCourseStudent;
