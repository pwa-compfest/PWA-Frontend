import React from "react";
function VerifiyCourse() {
return (
<div className="mt-12">
    <div className="bg-whit emd:relative sm:px-[100px]">
        <div className="flex justify-center mb-12">
            <h2 className="h2">Dashboard</h2>
        </div>
        <div className="grid grid-rows-2 grid-flow-col sm:px-[100px] px-[30px] ">
            <h3 className="h3">Verify</h3>
            <div className="flex md:justify-start"> 
                <a href="/" className="btn-deactive items-center justify-center sm:mr-10">
                    Instructor
                </a>
                <a href="/" className="btn-primary items-center justify-center ml-8 lg:ml-0">
                    Course
                </a>
            </div>
        </div>
    </div>
    <div className="bg-gray-100 h-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:relative sm:px-[100px]">
            <div
                className="bg-bright max-w-md mx-auto md:max-w-2xl w-[300px] pt-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">
                <div className="mb-10 flex justify-center">
                    <img src="/images/user.png" alt="" />
                </div>
                <div className="text-left font-work px-8">
                    <span className="text-xl font-medium">Prof. Dr. Something</span>
                    <div className="text-sm leading-6 text-gray-500 mt-3">
                        <p>Email: your@email.com</p>
                        <p>NIP: 12345</p>
                        <p>Expertise: </p>
                        <p>Phone Number: </p>
                        <p>Gender: </p>
                    </div>
                    <div className="mt-5 flex items-start">
                        <button className="btn-reject">REJECT</button>
                        <button className="btn-primary">VERIFY</button>
                    </div>
                </div>
            </div>
            <div
                className="bg-bright max-w-md mx-auto md:max-w-2xl w-[300px] pt-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">
                <div className="mb-10 flex justify-center">
                    <img src="/images/user.png" alt="" />
                </div>
                <div className="text-left font-work px-8">
                    <span className="text-xl font-medium">Prof. Dr. Something</span>
                    <div className="text-sm leading-6 text-gray-500 mt-3">
                        <p>Email: your@email.com</p>
                        <p>NIP: 12345</p>
                        <p>Expertise: </p>
                        <p>Phone Number: </p>
                        <p>Gender: </p>
                    </div>
                    <div className="mt-5 flex items-start">
                        <button className="btn-reject">REJECT</button>
                        <button className="btn-primary">VERIFY</button>
                    </div>
                </div>
            </div>
            <div
                className="bg-bright max-w-md mx-auto md:max-w-2xl w-[300px] pt-12 h-[442px] place-self-center rounded-[24px] shadow-xl mt-12">
                <div className="mb-10 flex justify-center">
                    <img src="/images/user.png" alt="" />
                </div>
                <div className="text-left font-work px-8">
                    <span className="text-xl font-medium">Prof. Dr. Something</span>
                    <div className="text-sm leading-6 text-gray-500 mt-3">
                        <p>Email: your@email.com</p>
                        <p>NIP: 12345</p>
                        <p>Expertise: </p>
                        <p>Phone Number: </p>
                        <p>Gender: </p>
                    </div>
                    <div className="mt-5 flex items-start">
                        <button className="btn-reject">REJECT</button>
                        <button className="btn-primary">VERIFY</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="h-12"></div>
    </div>
</div>
);
}
export default VerifiyCourse;