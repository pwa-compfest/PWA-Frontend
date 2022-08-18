import React, { useState } from "react";
import Modal from "../Modal";
import Toast from "../Toast";

function QuizCardInstructor({ id, item, onEdit, onDelete }) {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [toastState, setToastState] = useState({ display: false });

  function handleDeleteQuiz() {
    onDelete(id);
    setModalDisplay(false);
    setToastState({ display: true, type: "success", content: "Quiz deleted." });
  }

  return (
    <section>
      {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
      {modalDisplay && (
        <Modal closeModal={() => setModalDisplay({ display: false })}>
          <>
            <div className="space-y-[10px] text-center">
              <p className="h3">Delete Your Quiz?</p>
              <p className="body">
                Are you sure you want to delete your quiz? WARNING: This action
                can't be undone.
              </p>
            </div>
            <div className="flex flex-row justify-between mt-[40px]">
              <button
                onClick={() => setModalDisplay(false)}
                className="btn-text text-error-500 enabled:hover:bg-error-50 enabled:focus:bg-error-50 enabled:active:bg-error-300"
              >
                Cancel
              </button>
              <button onClick={handleDeleteQuiz} className="btn-primary">
                Yes
              </button>
            </div>
          </>
        </Modal>
      )}
      <div className="relative shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
        <div className="space-y-[20px] max-w-[800px]">
          <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
            <button onClick={onEdit}>
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button onClick={() => setModalDisplay(true)}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <p className="subtitle text-neutral-500">{item.name}</p>
            <p className="body text-neutral-500">
              Total question: {item.total_question}
            </p>
          </div>
          <p className="body text-neutral-500">{item.description}</p>
        </div>
        <div className="flex justify-end">
          <a href={item.url} className="btn-text md:w-fit w-full">
            Preview
          </a>
        </div>
      </div>
    </section>
  );
}

export default QuizCardInstructor;
