import React, { useState } from "react";
import axios from "../../api/axios";

export default function LectureCardStudent({
  item,
  courseId,
  studentProgress,
}) {
  const [loading, setLoading] = useState(false);
  const [viewed, setViewed] = useState(
    typeof studentProgress[item.id] !== "undefined" && studentProgress[item.id]
  );
  function handleOnClick() {
    window.open(item.url);
    console.log(
      JSON.stringify({ courseId: parseInt(courseId), lectureId: item.id })
    );

    setLoading(true);
    axios
      .post(
        `/lectures/student-progress`,
        { courseId: parseInt(courseId), lectureId: item.id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setViewed(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      {!loading ? (
        <div
          className={`shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full ${
            viewed && "border-l-secondary-500 border-l-8"
          }`}
        >
          <p className="subtitle text-neutral-500">{item.title}</p>
          <div className="flex justify-end">
            <button
              onClick={handleOnClick}
              className={`${
                viewed ? "btn-text" : "btn-primary"
              } md:w-fit w-full`}
            >
              {viewed ? "Review" : "View"}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`flex justify-center items-center shadow-md px-[40px] py-[64px] rounded-[24px] space-y-[40px] w-full`}
        >
          <div className="loading-spinner" />
        </div>
      )}
    </>
  );
}
