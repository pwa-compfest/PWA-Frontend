import React, { useRef } from "react";
import Dropdown from "../Dropdown";

function PersonalDetailsInstructor({ value, setValue, prevStep, nextStep }) {
  const nameRef = useRef();
    const nipRef = useRef();
    const expertiseRef = useRef();

    function updateValue() {
      value.name = nameRef.current.value ? nameRef.current.value : value.name;
      value.nip = nipRef.current.value ? nipRef.current.value : value.nip;
      value.expertise = expertiseRef.current ? expertiseRef.current : value.expertise
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
          <label className="label-form block">NIP</label>
          <input required className="text-input mx-auto focus:outline-none" type={"number"}
            placeholder="1234" defaultValue={value.nip} ref={nipRef}></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Expertise</label>
          <Dropdown
          placeholder="Pick an expertise"
          data={["Visual Communication Design","Software Engineering","Computer Networking Engineering"]}
          reference={expertiseRef}
          value={value.expertise}
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

export default PersonalDetailsInstructor;