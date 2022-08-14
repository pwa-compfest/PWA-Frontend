import React from "react";
function SignIn() {
  return (
      <div className="grid grid-cols-2 mx-auto">
        <div className="flex justify-center items-center justify-items-center">
          <div>
            <h2 className="h2 flex justify-center mb-4">Welcome Back!</h2>
            <p className="subtitle flex justify-center text-center text-neutral-500">
              Sign in and let's continue our journey towards free education.
            </p>
            <div className="hidden w-[400px] justify-center sm:grid items-center ml-[50px]">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto place-self-center lg:col-span-7 rounded-2xl shadow-xl px-6 py-6">
            <div>
              <label className="block text-neutral-500">Email</label>
              <input
                className="label"
                type={"text"}
                placeholder="example@email.com"
              ></input>
            </div>
            <div>
              <label className="block mt-5 text-neutral-500">Password</label>
              <input
                className="label"
                type={"text"}
                placeholder="enter password"
              ></input>
            </div>
            <div className="flex justify-end mt-3">
              <a href="/forgot-password" className="link text-primary-300 text-[12px] no-underline">
                Forgot Password?
              </a>
            </div>
            <button className="btn-primary block w-[100%] mt-20">
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
  );
}

export default SignIn;
