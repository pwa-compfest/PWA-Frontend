import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="md:relative bg-gradient-to-r from-primary-500 to-secondary-500">
      <div id="top"></div>
      <section className="px-12 md:px-[100px] xl:px-[180px] bg-white h-[calc(100vh-100px)] md:rounded-b-[100px] rounded-b-[64px]">
        <div className="flex justify-between h-[calc(100%-100px)] items-center">
          <div className="xl:w-1/2">
            <p className="pretitle mb-2">HI, WELCOME TO PWA COURSE</p>
            <h1 className="md:h1 h2">
              for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Learning
              </span>
            </h1>
            <h1 className="md:h1 h2">
              for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Teaching
              </span>
            </h1>
            <h1 className="md:h1 h2">
              for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Free
              </span>
            </h1>
            <p className="subtitle text-neutral-500 mt-5 mb-5">
              The best way to learn, PWA Course Provide the best teacher and
              courses for your learning. PWA Course is build to help.
            </p>
            <div className="flex flex-wrap justify-between md:justify-start sm:space-x-10">
              <button
                onClick={() => navigate("/register/instructor")}
                className="btn-primary mt-2"
              >
                INSTRUCTOR
              </button>
              <button
                onClick={() => navigate("/register/student")}
                className="btn-primary mt-2"
              >
                STUDENT
              </button>
            </div>
          </div>
          <div className="hidden lg:mt-0 xl:block">
            <img
              src="/images/landing_page-1.png"
              alt="mockup"
              className="w-[460px] h-[242px] mx-auto"
            />
          </div>
        </div>

        {/* Toogle */}
        <div className="flex justify-center items-end">
          <a
            className="btn-icon-primary items-center justify-center inline-flex"
            href="#middle"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </section>

      <div id="middle"></div>
      <section className="px-12 md:px-[100px] xl:px-[180px] bg-white h-[100vh] md:rounded-[100px] rounded-[64px]">
        <div className="flex justify-between h-[calc(100%-100px)] items-center">
          <div className="hidden lg:mt-0 xl:block">
            <img src="/images/landing_page-2.png" alt="mockup" />
          </div>
          <div className="xl:w-[550px] place-self-center rounded-2xl shadow-xl px-6 py-6">
            <p className="pretitle mb-2">FOR STUDENT</p>
            <p className="h2">
              Learn and Test Your Knowledge in Anything for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Free
              </span>
            </p>
            <p className="subtitle text-neutral-500 mt-5 mb-5">
              PWA Course provide a lot of best classes for u to learn anything
              that you need.
            </p>
            <div className="flex items-end justify-end">
              <button
                onClick={() => navigate("/register/student")}
                className="btn-primary mt-16"
              >
                LEARN NOW
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7 ">
          <a
            className="btn-icon-primary items-center justify-center inline-flex"
            href="#bottom"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </section>

      <div id="bottom"></div>
      <section className="px-12 md:px-[100px] xl:px-[180px] bg-white h-[100vh] md:rounded-[100px] rounded-[64px]">
        <div className="flex justify-between h-[calc(100%-100px)] items-center">
          <div className="xl:w-[550px] place-self-center rounded-2xl shadow-xl px-6 py-6">
            <p className="pretitle mb-2">FOR INSTRUCTOR</p>
            <p className="h2">
              Reach More Student Anywhere, Anytime for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Free
              </span>
            </p>
            <p className="subtitle text-neutral-500 mt-5 mb-5">
              pwa course is a place for you who want to express your teaching
              skills, you can create as many classes as you want.{" "}
            </p>
            <div className="flex items-end justify-end">
              <button
                onClick={() => navigate("/register/instructor")}
                className="btn-primary mt-16"
              >
                TEACH NOW
              </button>
            </div>
          </div>

          <div className="hidden lg:mt-0 xl:block">
            <img
              src="/images/landing_page-3.png"
              alt="mockup"
              className="w-[440px] h-[440px] mx-auto"
            />
          </div>
        </div>

        <div className="flex justify-center mt-7 ">
          <a
            className="btn-icon-primary items-center justify-center inline-flex"
            href="#top"
          >
            <i className="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
