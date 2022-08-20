import React, { useState } from "react";
import Modal from "../Modal";
import axios from "../../api/axios";

function ChangeVisibilityModal({
  changeTo,
  id,
  setModalDisplay,
  contentTotal,
  setMessage,
  onChangeVisibility,
}) {
  const [loading, setLoading] = useState(false);

  function handleChangeVisibility() {
    setLoading(true);
    axios
      .put(`/courses/${changeTo}/${id}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        onChangeVisibility();
        setModalDisplay({ display: false });
        setMessage({
          display: true,
          type: "success",
          content: `Course changed to ${changeTo}`,
        });
      })
      .catch((err) => {
        console.log(err);
        setModalDisplay({ display: false });
        setMessage({
          display: true,
          type: "error",
          content: `Failed to change course to ${changeTo}`,
        });
      })
      .finally(() => setLoading(false));
  }
  return (
    <Modal closeModal={() => setModalDisplay({ display: false })}>
      {contentTotal > 0 ? (
        <div className="min-w-[300px]">
          {!loading ? (
            <>
              <div className="space-y-[10px] text-center">
                {changeTo === "private" ? (
                  <>
                    <p className="h3">Change Your Course to Private?</p>
                    <p className="body">
                      This means students can't enroll to the course and can't
                      access all contents in the course.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="h3">Change Your Course to Public?</p>
                    <p className="body">
                      This means students can enroll to the course and access
                      all contents in the course.
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-row justify-between mt-[40px]">
                <button
                  onClick={() => setModalDisplay(false)}
                  className="btn-text text-error-500 enabled:hover:bg-error-50 enabled:focus:bg-error-50 enabled:active:bg-error-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleChangeVisibility}
                  className="btn-primary"
                >
                  Yes
                </button>
              </div>
            </>
          ) : (
            <div className="h-[300px] flex justify-center items-center">
              <div className="loading-spinner" />
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="space-y-[10px] text-center">
            <p className="h3">The Course Currently Have Zero Content</p>
            <p className="body">
              Add a lecture or quiz before you change the course to public.
            </p>
          </div>
          <div className="mt-[40px]">
            <button
              onClick={() => setModalDisplay(false)}
              className="btn-text w-full"
            >
              I Understand
            </button>
          </div>
        </>
      )}
    </Modal>
  );
}

export default ChangeVisibilityModal;
