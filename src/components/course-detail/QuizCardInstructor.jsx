import React from "react";

function QuizCardInstructor(props) {
    return (
        <div className="relative shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
            <div className="space-y-[20px] max-w-[800px]">
                <div className="text-neutral-100 space-x-2 absolute top-4 right-[80px]">
                    <button>
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button>
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                <div>
                    <p className="subtitle text-neutral-500">{props.name}</p>
                    <p className="body text-neutral-500">Total question: {props.total_question}</p>
                </div>
                <p className="body text-neutral-500">{props.description}</p>
            </div>
            <div className="flex justify-end">
                <button className="btn-text md:w-fit w-full">Preiew</button>
            </div>
        </div>
    )
}

export default QuizCardInstructor