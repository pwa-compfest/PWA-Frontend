import React from "react";

function SignUp() {
  return (
    <section className="md:h-[77.4vh] md:relative sm:px-[100px]">
      <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 ">
        <div className="justify-center items-center justify-items-center hidden lg:mt-0 xl:block">
          <div className="justify-center sm:grid items-center">
            <img src="/images/sign_up.png" alt="mockup" />
          </div>
        </div>
        <div className="flex items-center justify-center px-[40px]">
          <div className="mx-auto place-self-center lg:col-span-7 rounded-2xl shadow-xl px-6 py-6">
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
