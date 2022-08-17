import React, { useRef } from "react";

function PersonalDetails({ prevStep, value, setValue, onSubmit }) {
  const profilePictureRef = useRef();

  function handleSubmit(e) {
    e.preventDefault()
    value.profilePicture = profilePictureRef.current.value ? profilePictureRef.current.value : value.profilePicture;
    setValue(value);
    onSubmit(e);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-12 text-neutral-100 text-[100px] flex justify-center">
          <i class="fa-solid fa-circle-user"></i>
      </div>
      <div className="mb-5">
        <label className="label-form block">Profile picture (optional)</label>
        <input
        className="file-input"
        type={"file"}
        accept="image/png, image/jpg, image/jpeg"
        ref={profilePictureRef}
        />
      </div>
      <div className="w-full flex justify-between items-center">
          <button onClick={prevStep} className="btn-text block mt-12">
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