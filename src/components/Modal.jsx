import React from "react";

function Modal({ closeModal, children }) {
    return (
        <div onClick={closeModal} className="bg-neutral-50 bg-opacity-90 fixed top-0 left-0 w-screen h-screen z-10">
            <div className="w-full h-full flex justify-center items-center">
                <div onClick={(e) => e.stopPropagation()} className="bg-bright w-[400px] h-fit shadow-md px-[40px] py-[32px] rounded-[24px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;