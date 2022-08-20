import React, { useEffect, useState } from "react";
import CircleProgressBar from "../../components/CircleProgressBar";
import axios from "../../api/axios";
import CardFeedbackStudent from "../../components/CardFeedbackStudent";
import { useParams } from "react-router-dom";

function QuizFeedbackStudent({ questionData, quizData }) {
  const [loading, setLoading] = useState(true);
  const { courseId, quizId } = useParams();
  const [quizResult, setQuizResult] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`/student-quizzes/`, JSON.stringify({ quizId, questionData }), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setQuizResult(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [quizId, questionData]);

  return (
    <section className="bg-bright h-auto mt-12">
      {!loading && (
        <>
          <div className="flex flex-wrap justify-between px-[80px] lg:px-[100px] ">
            <div className="mb-5">
              <h2 className="h2 mb-5">Feedback {quizData.title}</h2>
              <div className="text-neutral-500 ">
                <div className="subtitle mb-1">
                  Course: {quizData.courseTitle}
                </div>
                <div className="subtitle mb-1">
                  Total Question: {quizData.questions.length}
                </div>
                <p className="w-[358px] lg:w-[527px] md:w-[527px] body">
                  {quizData.description}
                </p>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="h3">Your Score</h3>
              <div className="flex justify-center mt-5">
                <div className="min-w-[100px] max-w-[100px]">
                  <CircleProgressBar value={quizResult.quizResult} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid md:relative  px-[80px] lg:px-[100px] justify-start">
            {quizData.questions.map((question, index) => {
              return (
                <CardFeedbackStudent
                  key={index}
                  index={index}
                  total={quizData.questions.length}
                  question={question}
                  answerData={quizResult.answerData[question.id]}
                />
              );
            })}
            <div className="flex justify-end pt-12 py-12">
              <div className="text-primary-500 space-x-12">
                <button
                  onClick={() => window.location.reload()}
                  className="button-text"
                >
                  RETAKE QUIZ
                </button>
                <a href={`/student/course/${courseId}`} className="button-text">
                  COURSE PAGE
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
export default QuizFeedbackStudent;
