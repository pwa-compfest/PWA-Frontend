import React from "react";

function Card(props) {
  return (
    <div className="bg-white rounded-[24px] shadow-md w-[300px] h-[350px] grid grid-rows-2 mb-3">
      <div className="overflow-hidden relative">
        <img
          className="object-contain"
          src="/images/landing_page-1.png"
          alt="mockup"
        />
        <div className="bg-neutral-50 px-3 py-1 body text-neutral-500 rounded-[20px] absolute right-5 top-5">
          {props.students} students
        </div>
      </div>
      <div className="p-5 relative">
        <p className="subtitle">Course</p>
        <p className="body text-neutral-500">Prof. Dr. Something</p>
        <button className="btn-primary shadow-glow absolute bottom-5 right-5">
          ENROLL
        </button>
      </div>
    </div>
  );
}
export default Card;
