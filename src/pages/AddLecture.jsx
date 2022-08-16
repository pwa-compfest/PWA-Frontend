import React, { useState } from "react";

function AddLecture() {
  const [inputList, setInputList] = useState([{ lecture: "", url: "" }]);

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
    setInputList([...inputList, { lecture: "", url: "" }]);
  };
  
  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        <h1 className="h2 text-center mb-10">Add Lecture</h1>
        <div className="grid grid-cols-1 justify-center place-items-center">
          {inputList.map((x, i) => {
            return (
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
                <div className="flex justify-end">
                  <button
                    className="btn-icon-text text-neutral-500"
                    onClick={() => handleRemoveClick(i)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
                <label className="label-form">Lecture name</label>
                <input
                  className="text-input mb-4"
                  onChange={(e) => handleInputChange(e, i)}
                  name="lecture"
                  value={x.lecture}
                />
                <label className="label-form">URL</label>
                <input
                  className="text-input"
                  name="url"
                  value={x.url}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
            );
          })}

          <button className="btn-icon-primary mt-10" onClick={handleAddClick}>
            +
          </button>
          <div className="w-[400px] mt-14 flex justify-end">
            <button className="btn-primary mb-5">SUBMIT</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddLecture;
