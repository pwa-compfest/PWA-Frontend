import React from "react";
function SignIn() {
return (
<section className="bg-white px-[30px]">
  <div className="container">
    <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
      <div className="justify-center text-center p-5 hidden lg:mt-0 xl:block">
        <h2 className="h2">Welcome Back!</h2>
        <p className="subtitle text-neutral-500 mt-3">
          Sign in and let's continue our journey towards free education.
        </p>
        <img src="/images/sign_in.png" alt="mockup" />
      </div>
      <div
        className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl ">
        <div className="mb-5">
          <label className="label-form block">Email</label>
          <input className="text-input mx-auto focus:outline-none" type={"email"}
            placeholder="example@email.com"></input>
        </div>
        <div className="mb-5">
          <label className="label-form block">Password</label>
          <input className="text-input mx-auto focus:outline-none" type={"password"}
            placeholder="enter password"></input>
        </div>
        <div className="flex justify-end">
          <a href="/forgot-password" className="link text-primary-300 text-[14px] no-underline">
            Forgot Password?
          </a>
        </div>
        <button className="btn-primary block w-[100%] mt-12">
          SIGN IN
        </button>
        <p className="body mt-8 text-neutral-500 flex justify-center">
          Don't have an account yet?
          <a href="/" className="link text-primary-300 ml-2 no-underline">
            Create One
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
);
}

export default SignIn;