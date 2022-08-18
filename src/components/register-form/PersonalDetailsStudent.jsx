import React, { useRef } from "react";
import Dropdown from "../Dropdown";

function PersonalDetailsStudent({ value, setValue, prevStep, nextStep }) {
    const nameRef = useRef();
    const nisRef = useRef();
    const majorRef = useRef();

    function updateValue() {
      value.name = nameRef.current.value ? nameRef.current.value : value.name;
      value.nis = nisRef.current.value ? nisRef.current.value : value.nis;
      value.major = majorRef.current ? majorRef.current : value.major
      setValue(value);
    }

    function handleNextStep(e) {
      e.preventDefault();
      updateValue();
      nextStep(e);
    }

    function handlePrevStep(e) {
      e.preventDefault();
      updateValue();
      prevStep(e);
    }

    return (
      <form onSubmit={handleNextStep}>
        <div className="mb-5">
          <label className="label-form block">Name</label>
          <input required className="text-input mx-auto focus:outline-none" type={"text"}
            placeholder="Your name" defaultValue={value.name} ref={nameRef}></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">NIS</label>
          <input required className="text-input mx-auto focus:outline-none" type={"number"}
            placeholder="1234" defaultValue={value.nis} ref={nisRef}></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Major</label>
          <Dropdown
          placeholder={value.major ? value.major : "Pick a major"}
          data={["Visual Communication Design", "Software Engineering", "Computer Networking Engineering"]}
          reference={majorRef}
          value={value.major}
          />
        </div>
        <div className="w-full flex justify-between items-center">
            <button onClick={handlePrevStep} className="btn-text block mt-12">
            Prev
            </button>
            <button type="submit" className="btn-primary block mt-12">
            Next
            </button>
        </div>
      </form>
    )
}

export default PersonalDetailsStudent;