import React from "react";

export default function LectureCardStudent({ item }) {
  return (
    <div
      className={`shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full ${
        item.viewed && "border-l-secondary-500 border-l-8"
      }`}
    >
      <p className="subtitle text-neutral-500">{item.name}</p>
      <div className="flex justify-end">
        <a
          href={item.url}
          className={`${
            item.viewed ? "btn-text" : "btn-primary"
          } md:w-fit w-full`}
        >
          {item.viewed ? "Review" : "View"}
        </a>
      </div>
    </div>
  );
}
