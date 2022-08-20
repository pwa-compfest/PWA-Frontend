import React from "react";
import axios from "../../api/axios";

export default function LectureCardStudent({ item, viewed }) {
  function handleOnClick() {
    window.open(item.url);
    axios
      .post(
        `/lectures/student-progress`,
        JSON.stringify({ courseId: item.course_id, lectureId: item.id }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("PWA_LMS_AT")}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      className={`shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full ${
        viewed && "border-l-secondary-500 border-l-8"
      }`}
    >
      <p className="subtitle text-neutral-500">{item.title}</p>
      <div className="flex justify-end">
        <button
          onClick={handleOnClick}
          className={`${viewed ? "btn-text" : "btn-primary"} md:w-fit w-full`}
        >
          {viewed ? "Review" : "View"}
        </button>
      </div>
    </div>
  );
}
