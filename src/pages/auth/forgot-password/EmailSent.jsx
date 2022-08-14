import React from "react";

function EmailSent() {
return (
<section className="bg-white px-[30px]">
    <div className="container">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            <div className="justify-center text-center p-5 hidden lg:mt-0 xl:block">
                <h2 className="h2">Forgot Your Password</h2>
                <p className="subtitle text-neutral-500 mt-3">Dont worry, we'll help you out!</p>
                <img src="/images/sign_in.png" className="mt-5" alt="" />
            </div>
            <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
                <div className="justify-center flex">
                    <img src="/images/mail.png" className="mt-3" alt="" />
                </div>
                <p className="font-work text-center mt-5">
                    We’ve sent you an email! Check your inbox or spam folder to reset your password.
                </p>
            </div>
        </div>
    </div>
</section>
);
}

export default EmailSent;