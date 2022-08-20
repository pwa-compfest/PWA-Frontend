import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import CardQuestionStudent from "../../components/CardQuestionStudent";
import QuizFeedbackStudent from "./QuizFeedbackStudent";
import Toast from "../../components/Toast";

function QuizStudent() {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { courseId, quizId } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState({ display: false });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/quizzes/quiz/${courseId}/${quizId}`)
      .then((res) => {
        console.log(res);
        setQuizData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line
  }, [courseId, quizId]);

  function handleSubmit() {
    console.log(questionData);
    if (questionData.length !== quizData.length) {
      setMessage({
        display: true,
        type: "error",
        content: "Please answer all question.",
      });
      return;
    }
    setSubmitted(true);
  }
  return (
    <>
      {!submitted ? (
        <section className="bg-bright h-auto mt-12">
          {message.display && <Toast {...message} closeToast={setMessage} />}
          {!loading && (
            <>
              <div className="flex flex-wrap justify-between px-[80px] lg:px-[100px] ">
                <div className="mb-5">
                  <h2 className="h2 mb-5">{quizData.title}</h2>
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
              </div>
              <div className="w-full grid md:relative  px-[80px] lg:px-[100px] justify-start">
                {quizData.questions.map((question, index) => {
                  return (
                    <CardQuestionStudent
                      key={index}
                      question={question}
                      index={index}
                      total={quizData.questions.length}
                      questionData={questionData}
                      setQuestionData={setQuestionData}
                    />
                  );
                })}
                <div className="flex justify-end pt-12 py-12">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-primary"
                  >
                    SUBMIT ANSWER
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      ) : (
        <QuizFeedbackStudent quizData={quizData} questionData={questionData} />
      )}
    </>
  );
}
export default QuizStudent;
