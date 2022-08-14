import React from "react";

function ForgotPassword() {
return (
<section className="bg-white px-[30px]">
    <div className="container">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
            <div className="justify-center text-center p-5 hidden lg:mt-0 xl:block">
                <h2 className="h2">Forgot Your Password</h2>
                <p className="subtitle text-neutral-500 mt-3">Dont worry, we'll help you out!</p>
                <img src="/images/sign_in.png" className="mt-5" alt="" />
            </div>
            <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
                <div>
                    <label className="label-form block">Email</label>
                    <input className="text-input mx-auto focus:outline-none" type={"email"}
                        placeholder="example@email.com"></input>
                </div>
                <button className="btn-primary block w-[100%] mt-12">
                    FORGOT PASSWORD
                </button>
            </div>
        </div>
    </div>
</section>
);
}

export default ForgotPassword;