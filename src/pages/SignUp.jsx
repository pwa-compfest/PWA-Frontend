import React from "react";
import Navbar from "../components/Navbar";

function SignUp() {
  return (
    <div>
      <div className="grid grid-cols-2 mx-auto h-[calc(100vh-75px)] px-[150px]">
        <div className="flex justify-center items-center justify-items-center">
          <div className="hidden w-[400px] justify-center sm:grid items-center ml-[50px]">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
        <div className="flex items-center justify-center px-[40px]">
          <div className="mx-auto place-self-center lg:col-span-7 rounded-2xl shadow-xl px-6 py-6">
            <h3 className="h3 text-center">
              What do you want to do in PWA Course?
            </h3>
            <button className="btn-primary block w-[100%] mt-14">
              I WANT TO LEARN!
            </button>
            <button className="btn-primary block w-[100%] mt-8">
              I WANT TO TEACH!
            </button>
            <p className="body mt-10 text-neutral-500 flex justify-center">
              Already have an account?
              <a href="/" className="link text-primary-300 ml-2">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
