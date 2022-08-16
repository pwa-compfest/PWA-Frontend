import React from "react";

export function UnviewedLectureCard({ name }) {
    return (
        <div className="shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
            <p className="subtitle text-neutral-500">{name}</p>
            <div className="flex justify-end">
                <button className="btn-primary md:w-fit w-full">View</button>
            </div>
        </div>
    )
}

export function ViewedLectureCard({ name }) {
    return (
        <div className="shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full border-l-secondary-500 border-l-8">
            <p className="subtitle text-neutral-500">{name}</p>
            <div className="flex justify-end">
                <button className="btn-text md:w-fit w-full">View</button>
            </div>
        </div>
    )
}