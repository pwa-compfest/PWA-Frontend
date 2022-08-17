import React, { useState } from "react";
import Modal from "../Modal";
import Toast from "../Toast";
function LectureCardInstructor(props) {
  const [modalDisplay, setModalDisplay] = useState({ display: false });
  const [item, setitem] = useState({ name: "", url: "" });
  const [toastState, setToastState] = useState({ display: false });

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
    setModalDisplay({ display: false});
    setToastState({ display: true, type: "success", content: "Lecture updated" });
  }

  function handleDeleteLecture() {
    props.onDelete(props.id);
    setModalDisplay({ display: false});
    setToastState({ display: true, type: "success", content: "Lecture deleted." });
  }

  return (
    <section> 
      {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
      {modalDisplay.content === "edit-lecture" && (
        <Modal closeModal={() => setModalDisplay({ display: false })}>
          <div>
            <h1 className="h2 text-center mb-10">Edit Lecture</h1>
            <div className="flex flex-wrap justify-center">
              <div className="w-[400px] p-[20px] rounded-[24px]">
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
      {modalDisplay.content === "delete-lecture" && (
        <Modal closeModal={() => setModalDisplay({ display: false })}>
            <>
            <div className="space-y-[10px] text-center">
                    <p className="h3">Delete Your Lecture?</p>
                    <p className="body">
                    Are you sure you want to delete your lecture? WARNING: This action can't be undone.
                    </p>
            </div>
            <div className="flex flex-row justify-between mt-[40px]">
                <button
                onClick={() => setModalDisplay(false)}
                className="btn-text text-error-500 enabled:hover:bg-error-50 enabled:focus:bg-error-50 enabled:active:bg-error-300"
                >
                Cancel
                </button>
                <button
                onClick={handleDeleteLecture}
                className="btn-primary"
                >
                Yes
                </button>
            </div>
            </>
        </Modal>
      )}
      <div className="relative shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
        <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
          <button onClick={() => setModalDisplay({ display: true, content: "edit-lecture" })}>
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button onClick={() => setModalDisplay({ display: true, content: "delete-lecture" })}>
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
