import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../components/Toast";

function AddLecture() {
  const { courseId } = useParams();
  const [inputList, setInputList] = useState([
    { course_id: parseInt(courseId), title: "", url: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ display: false });
  const navigate = useNavigate();

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
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
      { course_id: parseInt(courseId), title: "", url: "" },
    ]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (inputList.length === 0) {
      setMessage({
        display: true,
        type: "error",
        content: "You need to add at least one lecture.",
      });
      return;
    }

    setLoading(true);
    console.log(JSON.stringify({ lecturesData: inputList }));
    axios
      .post(`/lectures`, JSON.stringify({ lecturesData: inputList }), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate(`/instructor/course/${courseId}`);
      })
      .catch((err) => {
        console.log(err);
        setMessage({
          display: true,
          type: "error",
          content: "Failed to add lecture.",
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      {!loading ? (
        <div className="container">
          {message.display && <Toast {...message} closeToast={setMessage} />}
          <h1 className="h2 text-center mb-10">Add Lecture</h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 justify-center place-items-center"
          >
            {inputList.map((x, i) => {
              return (
                <div
                  key={i}
                  className="shadow-card w-[400px] p-[20px] rounded-[24px]"
                >
                  <div className="flex justify-end">
                    <button
                      className="btn-icon-text text-neutral-100"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <label className="label-form">Lecture name</label>
                  <input
                    className="text-input mb-4"
                    onChange={(e) => handleInputChange(e, i)}
                    name="title"
                    value={x.title}
                    required
                  />
                  <label className="label-form">URL</label>
                  <input
                    className="text-input"
                    name="url"
                    value={x.url}
                    onChange={(e) => handleInputChange(e, i)}
                    required
                  />
                </div>
              );
            })}

            <button
              className="btn-icon-primary text-[30px] px-[10px] py-[6px] flex justify-center mt-10"
              onClick={handleAddClick}
            >
              <i class="fa-solid fa-plus"></i>
            </button>
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

export default AddLecture;
