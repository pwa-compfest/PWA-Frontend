import React, { useRef } from "react";
import Dropdown from "../Dropdown";

function PersonalDetails({ prevStep, nextStep, value, setValue }) {
    const phoneNumberRef = useRef();
    const genderRef = useRef();

    function handleNextStep(e) {
      e.preventDefault()
      value.phoneNumber = phoneNumberRef.current.value ? phoneNumberRef.current.value : value.phoneNumber;
      value.gender = genderRef.current ? genderRef.current : value.gender;
      setValue(value);
      nextStep(e);
    }
    return (
      <form onSubmit={handleNextStep}>
        <div className="mb-5">
          <label className="label-form block">Phone number</label>
          <div className="flex flex-row items-center space-x-2 text-neutral-500">
            <label className="body">+62</label>
            <input required className="text-input mx-auto focus:outline-none" type={"text"}
                placeholder="xxxxxxxxxxx" defaultValue={value.phoneNumber} ref={phoneNumberRef}></input>
          </div>
        </div>
        <div className="mb-5">
          <label className="label-form block">Gender</label>
          <Dropdown
          placeholder={value.gender ? value.gender : "Pick a gender"}
          data={["Female", "Male"]}
          reference={genderRef}
          value={value.gender}
          />
        </div>
        <div className="w-full flex justify-between items-center">
            <button onClick={prevStep} className="btn-text block mt-12">
            Prev
            </button>
            <button type="submit" className="btn-primary block mt-12">
            Next
            </button>
        </div>
      </form>
    )
}

export default PersonalDetails;