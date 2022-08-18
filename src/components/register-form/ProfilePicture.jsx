import React, { useRef, useState } from "react";
import Toast from "../Toast"

function PersonalDetails({ prevStep, value, setValue, onSubmit }) {
  const profilePictureRef = useRef();
  const [message, setMessage] = useState({ display: false });
  async function updateValue(input) {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result == null) {
        setMessage({ display: true, type: "error", content: "Failed to read file. Please reupload the file."})
        return
      }
      
      setMessage({ display: true, type: "success", content: "File uploaded."})
      value.profilePicture = reader.result;
      setValue(value);
    }
    reader.readAsDataURL(input[0]);
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(e);
  }

  function handlePrevStep(e) {
    e.preventDefault();
    value.profilePicture = "";
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
        onChange={(e) => updateValue(e.target.files)}
        ref={profilePictureRef}
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
    )
}

export default PersonalDetails;