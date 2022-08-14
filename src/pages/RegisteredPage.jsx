import React from "react";
import Navbar from "../components/Navbar";

function RegisteredPage() {
  return (
    <div>
      <div className="grid grid-cols-2 mx-auto h-[calc(100vh-75px)] px-[150px]">
        <div className="flex justify-center items-center justify-items-center">
          <div className="hidden w-[400px] justify-center sm:grid items-center">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="h1">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Hooray!
              </span>{" "}
              Your Account Has Been Verified!
            </h1>
            <p className="subtitle mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.{" "}
            </p>
            <button className="btn-primary mt-10">VIEW DASHBOARD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisteredPage;
