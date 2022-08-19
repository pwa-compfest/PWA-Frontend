import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Toast from "../../components/Toast";
function QuizInstructor() {
  const [inputList, setInputList] = useState([
    { question: "", answer: { A: "", B: "", C: "", D: "" } },
  ]);
  const quizNameRef = useRef();
  const descRef = useRef();
  const { courseId } = useParams();
  const [message, setMessage] = useState({ display: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    if (name === "question") {
      list[index][name] = value;
    } else {
      list[index].answer[name] = value;
    }
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { question: "", answer: { A: "", B: "", C: "", D: "" } },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputList.length === 0) {
      setMessage({
        display: true,
        type: "error",
        content: "You must at least add one question.",
      });
      return;
    }
    const body = {
      courseId: courseId,
      title: quizNameRef.current.value,
      description: descRef.current.value,
      questions: inputList,
    };
    console.log(body);
    setLoading(true);
    axios
      .post(`/quizzes/`, JSON.stringify(body), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate(`/course/${courseId}`);
      })
      .catch((err) => {
        console.log(err);
        setMessage({
          display: true,
          type: "error",
          content: "Failed to add quiz.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      {!loading ? (
        <div className="container">
          {message.display && <Toast {...message} closeToast={setMessage} />}
          <h1 className="h2 text-center mb-10">Add Quiz</h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 justify-center place-items-center"
          >
            <div className="shadow-card w-[400px] p-[20px] rounded-[24px] mb-12">
              <div className="mb-4">
                <label className="label-form">Quiz name</label>
                <input
                  required
                  className="text-input mx-auto "
                  type={"text"}
                  ref={quizNameRef}
                ></input>
              </div>
              <div className="mb-4">
                <label required className="label-form">
                  Description
                </label>
                <textarea
                  ref={descRef}
                  className="text-input mx-auto"
                ></textarea>
              </div>
            </div>
            {inputList.map((x, i) => {
              return (
                <div className="shadow-card w-[400px] p-[20px] rounded-[24px] mb-12">
                  <div className="flex justify-end">
                    <button
                      className="w-[40px] h-[40px] text-[#E0E1E6]"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <div className="small-text mb-4"> Question {i + 1}</div>
                  <label className="label-form">Question</label>
                  <input
                    required
                    className="text-input mb-4"
                    onChange={(e) => handleInputChange(e, i)}
                    name="question"
                    value={x.question}
                  />

                  <label className="label-form">Answer</label>
                  <div className="mb-3 body flex gap-[20px]">
                    <input
                      required
                      className="text-input"
                      onChange={(e) => handleInputChange(e, i)}
                      name="A"
                      value={x.answer.A}
                      placeholder="Answer A"
                    />
                  </div>
                  <div className="mb-3 body flex gap-[20px]">
                    <input
                      required
                      className="text-input"
                      onChange={(e) => handleInputChange(e, i)}
                      name="B"
                      value={x.answer.B}
                      placeholder="Answer B"
                    />
                  </div>
                  <div className="mb-3 body flex gap-[20px]">
                    <input
                      required
                      className="text-input"
                      onChange={(e) => handleInputChange(e, i)}
                      name="C"
                      value={x.answer.C}
                      placeholder="Answer C"
                    />
                  </div>
                  <div className="mb-3 body flex gap-[20px]">
                    <input
                      required
                      className="text-input"
                      onChange={(e) => handleInputChange(e, i)}
                      name="D"
                      value={x.answer.D}
                      placeholder="Answer D"
                    />
                  </div>

                  <label className="label-form">Correct Answer</label>
                  <div className="mb-3 body flex gap-[20px]">
                    <select className="text-input" name="correct_answer">
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                    </select>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-center mt-5">
              <button
                className="btn-icon-primary mt-10"
                onClick={handleAddClick}
              >
                <div className="flex justify-center">
                  <img src="/images/plus.svg" alt="" />
                </div>
              </button>
            </div>

            <div className="w-[400px] mt-14 flex justify-end">
              <button type="submit" className="btn-primary mb-5">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="loading-spinner" />
        </div>
      )}
    </section>
  );
}
export default QuizInstructor;
