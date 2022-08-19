import axios from "axios";
import React, { useState } from "react";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
function DeleteCourseModal({ setModalDisplay, id, onError, setMessage }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleDeleteCourse() {
    setLoading(true);
    axios
      .delete(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setModalDisplay({ display: false });
        setMessage({
          display: true,
          type: "error",
          content: "Failed to delete course",
        });
      })
      .finally(() => setLoading(false));
  }
  return (
    <Modal closeModal={() => setModalDisplay({ display: false })}>
      {!loading ? (
        <>
          <div className="space-y-[10px] text-center">
            <p className="h3">Delete Your Course?</p>
            <p className="body">
              Are you sure you want to delete your course? WARNING: This action
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
            <button onClick={handleDeleteCourse} className="btn-primary">
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

export default DeleteCourseModal;
