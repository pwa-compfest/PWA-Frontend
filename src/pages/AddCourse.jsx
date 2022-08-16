import React, { useState } from "react";

function AddCourse() {
  const [submit, setSubmit] = useState(false);

  function handleClick() {
    setSubmit(true);
  }

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        {!submit && (
          <div>
            <h1 className="h2 text-center mb-10">Add Course</h1>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
                <label className="label-form">Name</label>
                <input className="text-input mb-4" placeholder="course name" />
                <label className="label-form">Description</label>
                <textarea
                  className="text-input mb-4"
                  rows={5}
                  placeholder="course description"
                />
                <label className="label-form">Picture (optional)</label>
                <input
                  className="file-input mb-5"
                  type={"file"}
                  accept="image/png, image/jpg, image/jpeg"
                />
                <button
                  className="btn-primary mb-5 w-[100%]"
                  onClick={handleClick}
                >
                  SUBMIT COURSE
                </button>
              </div>
            </div>
          </div>
        )}
        {submit && (
          <div>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px] text-center">
                <div className="flex justify-center mb-5">
                  <img src="/images/checklist.png" alt="checklist" />
                </div>

                <h1 className="h3 mb-3">Your Request Has Been Sent!</h1>
                <p className="body text-neutral-500 mb-10">
                  We are reviewing your submission now. Please wait for further
                  information.
                </p>
                <div className="btn-primary">
                  <a href="/instructor/dashboard">GO TO DASHBOARD</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AddCourse;
