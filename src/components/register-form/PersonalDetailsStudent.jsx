import React from "react";
import Dropdown from "../Dropdown";

function PersonalDetailsStudent({ prevStep, nextStep }) {
    return (
      <form>
        <div className="mb-5">
          <label className="label-form block">Name</label>
          <input className="text-input mx-auto focus:outline-none" type={"text"}
            placeholder="Your name"></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">NIS</label>
          <input className="text-input mx-auto focus:outline-none" type={"number"}
            placeholder="1234"></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Major</label>
          <Dropdown
          placeholder="Pick a major"
          data={[{
            value: "vcd", 
            label: "Visual Communication Design"
          },{
            value: "se",
            label: "Software Engineering"
          },{
            value: "cne",
            label: "Computer Networking Engineering"
          }]}
          />
        </div>
        <div className="w-full flex justify-between items-center">
            <button onClick={prevStep} className="btn-text block mt-12">
            Prev
            </button>
            <button onClick={nextStep} className="btn-primary block mt-12">
            Next
            </button>
        </div>
      </form>
    )
}

export default PersonalDetailsStudent;