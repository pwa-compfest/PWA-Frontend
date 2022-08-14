import React from "react";
function SignIn() {
  return (
    <section className="bg-white px-[30px]">
      <div className="container">
        <div className="grid md:grid-cols-1 xl:grid-cols-2">
          <div className="justify-center text-center p-5 hidden xl:block">
            <h2 className="h2">Welcome Back!</h2>
            <p className="subtitle text-neutral-500 mt-3 mb-7">
              Sign in and let's continue our journey towards free education.
            </p>
            <img src="/images/sign_in.png" alt="mockup" />
          </div>
          <div className="justify-center max-w-md mx-auto md:max-w-2xl w-[500px] p-12 place-self-center rounded-[24px] shadow-xl">
            <div>
              <label className="label-form block">Email</label>
              <input
                className="text-input mx-auto focus:outline-none"
                type={"email"}
                placeholder="example@email.com"
              ></input>
              <label className="label-form block mt-3">Password</label>
              <input
                className="text-input mx-auto focus:outline-none"
                type={"password"}
                placeholder="enter password"
              ></input>
              <a
                href="/forgot-password"
                className="link text-primary-300 text-[12px] no-underline flex items-end justify-end"
              >
                Forgot Password?
              </a>
            </div>
            <button className="btn-primary block w-[100%] mt-12">
              SIGN IN
            </button>
            <p className="body mt-8 text-neutral-500 flex justify-center">
              Don't have an account yet?
              <a href="/register" className="link text-primary-300 ml-2 no-underline">
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
