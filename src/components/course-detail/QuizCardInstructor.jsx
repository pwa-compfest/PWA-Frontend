import React, { useState } from "react";
import Modal from "../Modal";
import Toast from "../Toast";
import axios from "../../api/axios";

function QuizCardInstructor({ item, onEdit, setLoadContent, onDelete }) {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [toastState, setToastState] = useState({ display: false });
  const [loading, setLoading] = useState(false);
  function handleDeleteQuiz() {
    setLoading(true);
    axios
      .delete(`/quizzes/${item.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
        setModalDisplay(false);
        setToastState({
          display: true,
          type: "error",
          content: "Failed to delete lecture.",
        });
      })
      .finally(() => {
        setLoading(false);
        setLoadContent(false);
      });
  }

  return (
    <section>
      {toastState.display && (
        <Toast {...toastState} closeToast={setToastState} />
      )}
      {modalDisplay && (
        <Modal closeModal={() => setModalDisplay({ display: false })}>
          {!loading ? (
            <>
              <div className="space-y-[10px] text-center">
                <p className="h3">Delete Your Quiz?</p>
                <p className="body">
                  Are you sure you want to delete your quiz? WARNING: This
                  action can't be undone.
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
          ) : (
            <div className="h-[300px] flex justify-center items-center">
              <div className="loading-spinner" />
            </div>
          )}
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
            <p className="subtitle text-neutral-500">{item.title}</p>
            <p className="body text-neutral-500">
              Total question: {item.total_questions}
            </p>
          </div>
          <p className="body text-neutral-500 pb-10">{item.description}</p>
        </div>
      </div>
    </section>
  );
}

export default QuizCardInstructor;
