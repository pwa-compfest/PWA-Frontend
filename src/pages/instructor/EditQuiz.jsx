import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import Toast from "../../components/Toast";

function EditQuiz() {
  const [inputList, setInputList] = useState([
    { question: "", answer: { A: "", B: "", C: "", D: "" }, answer_right: "A" },
  ]);
  const [item, setitem] = useState({
    title: "",
    description: "",
  });
  const [message, setMessage] = useState({ display: false });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`/quizzes/quiz/${location.state.courseId}/${location.state.quizId}`)
      .then((res) => {
        setInputList(res.data.data.questions);
        setitem({
          title: res.data.data.courseTitle,
          description: res.data.data.description,
        });
      });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setitem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    if (name === "question" || name === "answer_right") {
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
      {
        question: "",
        answer: { A: "", B: "", C: "", D: "" },
        answer_right: "A",
      },
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
      courseId: parseInt(location.state.courseId),
      title: item.title,
      description: item.description,
      questions: inputList,
    };
    setLoading(true);
    axios
      .put(`/quizzes/${location.state.quizId}`, JSON.stringify(body), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        navigate(`/instructor/course/${location.state.courseId}`);
      })
      .catch((err) => {
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
                  name="title"
                  value={item.title}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="mb-4">
                <label required className="label-form">
                  Description
                </label>
                <textarea
                  name="description"
                  value={item.description}
                  onChange={handleChange}
                  className="text-input mx-auto"
                ></textarea>
              </div>
            </div>
            {inputList.map((x, i) => {
              return (
                <div
                  key={i}
                  className="shadow-card w-[400px] p-[20px] rounded-[24px] mb-12"
                >
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
                    <select
                      required
                      className="text-input"
                      name="answer_right"
                      onChange={(e) => handleInputChange(e, i)}
                    >
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
        <div className="w-full h-full flex flex-col justify-center items-center space-y-8">
          <div className="loading-spinner" />
          <p className="body">Submitting data...</p>
        </div>
      )}
    </section>
  );
}
export default EditQuiz;
