import React from "react";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div id="top">
      <Navbar />
      <section class="bg-white px-[30px] py-2 mt-3 h-[80vh] md:h-[77.4vh] md:relative sm:px-[100px]">
        <div class="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <p className="pretitle mb-2">HI, WELCOME TO PWA COURSE</p>
            <h1 className="h1">
              for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Learning
              </span>
            </h1>
            <h1 className="h1">
              for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Teaching
              </span>
            </h1>
            <h1 className="h1">
              for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Free
              </span>
            </h1>
            <p class="subtitle text-neutral-500 mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
            <div className="flex justify-between md:justify-start">
              <a
              href="/"
              class="btn-primary inline-flex items-center justify-center md:mr-10"
            >
              INSTRUCTOR
            </a>
            <a
              href="/"
              class="btn-primary inline-flex items-center justify-center"
            >
              STUDENT
            </a>
            </div>
            
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
        <div className="flex justify-center mt-7 md:absolute md:inset-x-0 md:bottom-0">
          <a
            className="btn-icon-primary items-center justify-center inline-flex"
            href="#middle"
          >
            <i class="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </section>
      <div id="middle" className="h-[70px]"></div>
      <section class="bg-white px-[30px] sm:px-[100px] py-2 h-[80vh] md:relative">
        <div class="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div class="hidden lg:mt-0 lg:col-span-5 md:flex mr-10">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
          <div class="mx-auto place-self-center lg:col-span-7 rounded-2xl shadow-xl px-6 py-6">
            <p className="pretitle mb-2">FOR STUDENT</p>
            <p className="h2">
              Learn and Test Your Knowledge in Anything for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Free
              </span>
            </p>
            <p class="subtitle text-neutral-500 mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
            <div className="flex items-end justify-end">
              <a href="/" class="btn-primary">
                LEARN NOW
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7 md:absolute md:inset-x-0 md:bottom-0">
          <a
            className="btn-icon-primary items-center justify-center inline-flex"
            href="#bottom"
          >
            <i class="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </section>
      <div id="bottom" className="h-[70px]"></div>
      <section class="bg-white px-[30px] sm:px-[100px] py-2 h-[80vh] md:relative">
        <div class="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
          <div class="mx-auto place-self-center lg:col-span-7 rounded-2xl shadow-xl px-6 py-6">
            <p className="pretitle mb-2">FOR INSTRUCTOR</p>
            <p className="h2">
              Reach More Student Anywhere, Anytime for{" "}
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                Free
              </span>
            </p>
            <p class="subtitle text-neutral-500 mt-5 mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et
            </p>
            <div className="flex items-end justify-end">
              <a href="/" class="btn-primary">
                TEACH NOW
              </a>
            </div>
          </div>

          <div class="hidden lg:mt-0 lg:col-span-5 md:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
        <div className="flex justify-center mt-7 md:absolute md:inset-x-0 md:bottom-0">
          <a
            className="btn-icon-primary items-center justify-center inline-flex"
            href="#top"
          >
            <i class="fa-solid fa-chevron-up"></i>
          </a>
        </div>
      </section>
      <div className="h-[70px]"></div>
    </div>
  );
}

export default LandingPage;
