import React, { useState } from "react";
import Modal from "../Modal";

function LectureCardInstructor(props) {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [item, setitem] = useState({ name: "", url: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setitem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }
  function submitChange(e) {
    props.onEdit(item, props.id);
    setitem({ name: "", url: "" });
    setModalDisplay(false);
  }
  return (
    <section>
      {modalDisplay && (
        <Modal closeModal={() => setModalDisplay(false)}>
          <div>
            <h1 className="h2 text-center mb-10">Edit Lecture</h1>
            <div className="flex flex-wrap justify-center">
              <div className="shadow-card w-[400px] p-[20px] rounded-[24px]">
                <label className="label-form">Name</label>
                <input
                  className="text-input mb-4"
                  placeholder="current lecture name"
                  name="name"
                  value={item.name}
                  onChange={handleChange}
                />
                <label className="label-form">URL</label>
                <input
                  className="text-input mb-6"
                  placeholder="current URL "
                  name="url"
                  value={item.url}
                  onChange={handleChange}
                />
                <button
                  className="btn-primary mb-5 w-[100%]"
                  onClick={submitChange}
                >
                  SAVE CHANGES
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="relative shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
        <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
          <button onClick={() => setModalDisplay(true)}>
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <p className="subtitle text-neutral-500">{props.name}</p>
        <div className="flex justify-end">
          <button className="btn-text md:w-fit w-full">Preview</button>
        </div>
      </div>
    </section>
  );
}

export default LectureCardInstructor;
