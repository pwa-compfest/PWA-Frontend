import React from "react";

function LectureCardInstructor({ name }) {
    return (
        <div className="relative shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
            <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
                <button>
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <p className="subtitle text-neutral-500">{name}</p>
            <div className="flex justify-end">
                <button className="btn-text md:w-fit w-full">Preiew</button>
            </div>
        </div>
    )
}

export default LectureCardInstructor;