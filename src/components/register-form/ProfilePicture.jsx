import React, { useState, useRef } from "react";
import Toast from "../Toast";

function PersonalDetails({ prevStep, value, setValue, onSubmit }) {
  const [message, setMessage] = useState({ display: false });
  const photoRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    value.photo = photoRef.current.files[0];
    setValue(value);
    onSubmit(e);
  }

  function handlePrevStep(e) {
    e.preventDefault();
    prevStep(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      {message.display && <Toast {...message} closeToast={setMessage} />}
      <div className="mb-12 text-neutral-100 text-[100px] flex justify-center">
        <i class="fa-solid fa-circle-user"></i>
      </div>
      <div className="mb-5">
        <label className="label-form block">Profile picture (optional)</label>
        <input
          className="file-input"
          type={"file"}
          accept="image/*"
          encType="multipart/form-data"
          ref={photoRef}
        />
      </div>
      <div className="w-full flex justify-between items-center">
        <button onClick={handlePrevStep} className="btn-text block mt-12">
          Prev
        </button>
        <button type="submit" className="btn-primary block mt-12">
          Submit
        </button>
      </div>
    </form>
  );
}

export default PersonalDetails;
