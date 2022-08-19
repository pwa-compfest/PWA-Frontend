import React, { useRef } from "react";
import Dropdown from "../Dropdown";

function PersonalDetailsStudent({ value, setValue, prevStep, nextStep }) {
    const nameRef = useRef();
    const nisnRef = useRef();
    const majorityRef = useRef();
    const gradeRef = useRef();

    function updateValue() {
      value.name = nameRef.current.value ? nameRef.current.value : value.name;
      value.nisn = nisnRef.current.value ? nisnRef.current.value : value.nisn;
      value.majority = majorityRef.current ? majorityRef.current : value.majority;
      value.grade = gradeRef.current ? gradeRef.current : value.grade;
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
          <label className="label-form block">NISN</label>
          <input required className="text-input mx-auto focus:outline-none" type={"number"}
            placeholder="1234" defaultValue={value.nisn} ref={nisnRef}></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Majority</label>
          <Dropdown
          placeholder={value.majority ? value.majority : "Pick a major"}
          data={["Visual Communication Design", "Software Engineering", "Computer Networking Engineering"]}
          reference={majorityRef}
          value={value.majority}
          />
        </div>
        <div className="mb-5">
          <label className="label-form block">Grade</label>
          <Dropdown
          placeholder={value.grade ? value.grade : "Pick a grade"}
          data={["10", "11", "12"]}
          reference={gradeRef}
          value={value.grade}
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