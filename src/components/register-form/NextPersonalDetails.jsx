import Dropdown from "../Dropdown"

function PersonalDetails({ prevStep, nextStep }) {
    return (
      <form>
        <div className="mb-5">
          <label className="label-form block">Phone number</label>
          <div className="flex flex-row items-center space-x-2 text-neutral-500">
            <label className="body">+62</label>
            <input className="text-input mx-auto focus:outline-none" type={"text"}
                placeholder="xxxxxxxxxxx"></input>
          </div>
        </div>
        <div className="mb-5">
          <label className="label-form block">Gender</label>
          <Dropdown
          placeholder="Pick a gender"
          data={[{
            value: "F", 
            label: "Female"
          },{
            value: "M",
            label: "Male"
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

export default PersonalDetails;