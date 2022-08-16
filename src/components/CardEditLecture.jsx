import React, { useState } from "react";

function CardEditLecture(props) {
  const [item, setitem] = useState({ lecture: "", url: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setitem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }
  function submitChange(e) {
    props.onAdd(item);
  }
  return (
    <div>
      <h1 className="h2 text-center mb-10">Edit Lecture</h1>
      <div className="flex flex-wrap justify-center">
        <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
          <label className="label-form">Name</label>
          <input
            className="text-input mb-4"
            placeholder="current lecture name"
            name="lecture"
            value={item.lecture}
            onChange={handleChange}
          />
          <label className="label-form">URL</label>
          <input
            className="text-input mb-6"
            placeholder="current URL "
            name="url"
            value={item.url}
            onChange={handleChange}
          />
          <button className="btn-primary mb-5 w-[100%]" onClick={submitChange}>
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardEditLecture;
