import React from "react";

export default function QuizCardStudent({ item }) {
    return (
        <div className={`shadow-md px-[40px] py-[20px] rounded-[24px] space-y-[40px] w-full ${item.attempted && "border-l-secondary-500 border-l-8"}`}>
            <div className="space-y-[20px] max-w-[800px]">
                <div>
                    <p className="subtitle text-neutral-500">{item.name}</p>
                    <p className="body text-neutral-500">Total question: {item.total_question}</p>
                </div>
                <p className="body text-neutral-500">{item.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <p className="small-text text-neutral-500">Score: {item.score ? item.score : "Not Attempted"}</p>
                <a href={item.url} className={`${item.attempted ? "btn-text" : "btn-primary"} md:w-fit w-full`}>{item.attempted ? "Retake" : "Take"}</a>            </div>
        </div>
    )
}