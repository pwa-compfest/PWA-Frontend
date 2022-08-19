import React from "react";

function CardFeedbackStudent(props) {
  return (
    <div className="lg:w-[100vw-200px] w-[calc(100vw-160px)]">
      <div className="bg-white w-auto h-auto rounded-[24px] shadow-card p-[40px] mb-5">
        <span className="small-text">
          Quesion {props.index + 1}/{props.total}
        </span>
        <p className="body mt-5 mb-5">{props.question.question}</p>
        {Object.keys(props.question.answer).map((key) => {
          return (
            <div
              key={key}
              className={`mb-3 body flex justify-start ${
                props.answerData.rightAnswer === key && "correct-answer"
              } ${
                props.answerData.rightAnswer !==
                  props.answerData.studentAnswer &&
                key === props.answerData.studentAnswer &&
                "wrong-answer"
              }`}
            >
              <input
                type="radio"
                className="mr-3"
                checked={key === props.answerData.studentAnswer}
                disabled
              />{" "}
              {props.question.answer[key]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardFeedbackStudent;
