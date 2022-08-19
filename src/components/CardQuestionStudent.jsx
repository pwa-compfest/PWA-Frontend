import React, { useState } from "react";
function CardQuestionStudent(props) {
  const [answer, setAnswer] = useState();

  const handleOptionChange = (e) => {
    setAnswer(e.target.value);
    const objIdx = props.questionData.findIndex(
      (obj) => obj.questionId === props.question.id
    );

    const value = {
      questionId: props.question.id,
      studentAnswer: e.target.value,
    };

    if (objIdx !== -1) {
      props.questionData[objIdx] = value;
    } else {
      props.questionData.push(value);
    }

    props.setQuestionData(props.questionData);
    console.log(props.questionData);
  };

  return (
    <div className="lg:w-[100vw-200px] w-[calc(100vw-160px)]">
      <div className="bg-white w-auto h-auto rounded-[24px] shadow-card p-[40px] mb-5">
        <span className="small-text">
          Quesion {props.index + 1}/{props.total}
        </span>
        <p className="body mt-5 mb-5">{props.question.question}</p>
        {Object.keys(props.question.answer).map((key) => {
          return (
            <div key={key} className="mb-3 body flex justify-start">
              <input
                type="radio"
                className="mr-3"
                value={key}
                onChange={handleOptionChange}
                checked={answer === key}
              />{" "}
              {props.question.answer[key]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardQuestionStudent;
