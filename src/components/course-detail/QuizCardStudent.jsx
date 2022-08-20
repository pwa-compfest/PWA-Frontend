import React from "react";

export default function QuizCardStudent({ item }) {
  return (
    <div
      className={`shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full ${
        item.student_quizzes.length > 0 && "border-l-secondary-500 border-l-8"
      }`}
    >
      <div className="space-y-[20px] max-w-[800px]">
        <div>
          <p className="subtitle text-neutral-500">{item.title}</p>
          <p className="body text-neutral-500">
            Total question: {item.total_questions}
          </p>
        </div>
        <p className="body text-neutral-500">{item.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="small-text text-neutral-500">
          Score:{" "}
          {item.student_quizzes.length > 0
            ? item.student_quizzes[0].highest_score
            : "Not Attempted"}
        </p>
        <a
          href={`/student/quiz/${item.course_id}/${item.id}`}
          className={`${
            item.student_quizzes.length > 0 ? "btn-text" : "btn-primary"
          } md:w-fit w-full`}
        >
          {item.student_quizzes.length > 0 ? "Retake" : "Take"}
        </a>
      </div>
    </div>
  );
}
