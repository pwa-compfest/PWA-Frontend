import React from "react";

function RequestSent() {
    return (
        <div className="h-full flex items-center">
            <div
            className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 rounded-[24px] shadow-xl space-y-5 flex flex-col items-center">
                <div className="text-[160px] text-primary-50">
                <i class="fa-solid fa-circle-check"></i>
                </div>
                <h3 className="h3">Your Request Has Been Sent!</h3>
                <p className="body text-neutral-500 text-center">We are reviewing your submission now. Please wait for further information.</p>
            </div>
        </div>
    )
}

export default RequestSent;