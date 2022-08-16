import React from "react";

export function UnAttemptedQuizCard(props) {
    return (
        <div className="shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full">
            <div className="space-y-[20px] max-w-[800px]">
                <div>
                    <p className="subtitle text-neutral-500">{props.name}</p>
                    <p className="body text-neutral-500">Total question: {props.total_question}</p>
                </div>
                <p className="body text-neutral-500">{props.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="small-text text-neutral-500">Score: Not Attempted</p>
                <button className="btn-primary md:w-fit w-full">Take</button>
            </div>
        </div>
    )
}

export function AttemptedQuizCard(props) {
    return (
        <div className="shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full border-l-secondary-500 border-l-8">
            <div className="space-y-[20px] max-w-[800px]">
                <div>
                    <p className="subtitle text-neutral-500">{props.name}</p>
                    <p className="body text-neutral-500">Total question: {props.total_question}</p>
                </div>
                <p className="body text-neutral-500">{props.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="small-text text-neutral-500">Score: {props.score}</p>
                <button className="btn-text md:w-fit w-full">Retake</button>
            </div>
        </div>
    )
}