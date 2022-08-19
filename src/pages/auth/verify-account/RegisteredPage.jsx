import React from "react";
import { useNavigate } from "react-router-dom";

function RegisteredPage({ role }) {
  const navigate = useNavigate();

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container flex h-full justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="flex lg:justify-center text-center p-2">
            <img
              src="/images/accountregistered.png"
              alt="mockup"
              className="h-[150px] xl:h-[600px] md:h-[400px] sm:h-[200px]"
            />
          </div>
          <div className="items-center flex h-full justify-center">
            <div className="pt-5">
              <h1 className="h2 w-[357px] xl:w-[640px] xl:h1 ">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                  Hooray!
                </span>{" "}
                <span>Your Account Has Been Verified!</span>
              </h1>
              <p className="subtitle text-neutral-500 mt-4 w-[250px] xl:w-[500px] md:w-[300px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.{" "}
              </p>
              <button
                onClick={() =>
                  navigate(`/${role}/dashboard`, { replace: true })
                }
                className="btn-primary mt-10"
              >
                VIEW DASHBOARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisteredPage;
