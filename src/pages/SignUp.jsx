import React from "react";

function SignUp() {
  return (
    <section className="bg-white px-[30px] h-full flex justify-center items-center">
      <div className="flex xl:flex-row flex-col xl:space-x-[64px] space-x-[40px]">
        <div className="xl:flex xl:flex-col xl:space-y-[64px] text-center w-[500px] p-5 hidden lg:mt-0 h-full">
          <div className="justify-center sm:grid items-center">
            <img src="/images/sign_up.png" alt="mockup" />
          </div>
        </div>
        <div className="flex items-center justify-center px-[40px]">
          <div className="mx-auto lg:col-span-7 rounded-2xl shadow-xl px-6 py-6">
            <h3 className="h3 text-center">
              What do you want to do in PWA Course?
            </h3>
            <div className="text-center">
              <a
                href="/register/student"
                className="btn-primary block w-[100%] mt-14"
              >
                I WANT TO LEARN!
              </a>
            </div>
            <div className="text-center">
              <a
                href="/register/instructor"
                className="btn-primary block w-[100%] mt-8"
              >
                I WANT TO TEACH!
              </a>
            </div>

            <p className="body mt-10 text-neutral-500 flex justify-center">
              Already have an account?
              <a href="/login" className="link text-primary-300 ml-2">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
