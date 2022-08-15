import React from "react";
function VerifyInstructor() {
return (
<div className="mt-12">
    <div className="bg-whit emd:relative sm:px-[100px]">
        <div className="flex justify-center mb-12">
            <h2 className="h2">Dashboard</h2>
        </div>
        <div className="flex justify-between md:justify-start">
            <h3 className="h3 inline-flex items-center justify-center mr-10">Verify</h3>
            <a href="/" className="btn-primary inline-flex items-center justify-center md:mr-10">
                Instructor
            </a>
            <a href="/" className="btn-primary inline-flex items-center justify-center">
                Course
            </a>
        </div>
    </div>
    <div className="bg-gray-100 h-auto mt-12">
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:relative sm:px-[100px]">
            <div className="bg-bright justify-center max-w-md mx-auto md:max-w-2xl w-[300px] p-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">

            </div>
            <div className="bg-bright justify-center max-w-md mx-auto md:max-w-2xl w-[300px] p-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">

            </div>
            <div className="bg-bright justify-center max-w-md mx-auto md:max-w-2xl w-[300px] p-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">

            </div>

            <div className="bg-bright justify-center max-w-md mx-auto md:max-w-2xl w-[300px] p-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">

            </div>
        </div>
        <div className="h-12c"></div>
    </div>
</div>
);
}
export default VerifyInstructor;