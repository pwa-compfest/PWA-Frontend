import React, { useState } from "react";
import Modal from "../Modal";
import axios from "../../api/axios";
function DeleteLectureModal({
  setModalDisplay,
  setMessage,
  lectureId,
  onDelete,
  setLoadContent,
}) {
  const [loading, setLoading] = useState(false);
  function handleDeleteLecture() {
    setLoading(true);
    console.log(lectureId);
    axios
      .delete(`/lectures/${lectureId}`)
      .then((res) => {
        console.log(res);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
        setModalDisplay({ display: false });
        setMessage({
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
    <Modal closeModal={() => setModalDisplay({ display: false })}>
      {!loading ? (
        <>
          <div className="space-y-[10px] text-center">
            <p className="h3">Delete Your Lecture?</p>
            <p className="body">
              Are you sure you want to delete your lecture? WARNING: This action
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
            <button onClick={handleDeleteLecture} className="btn-primary">
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
  );
}

export default DeleteLectureModal;
