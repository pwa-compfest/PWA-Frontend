import React from "react";
function LandingPage() {
return (
<div className="">
  <div id="top"></div>
  <section className="bg-white xs:px-12">
    <div className="grid mx-auto md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
      <div className="mr-auto place-self-center">
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
        <p className="subtitle text-neutral-500 mt-5 mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et
        </p>
        <div className="flex justify-between md:justify-start">
          <a href="/" className="btn-primary inline-flex items-center justify-center md:mr-10">
            INSTRUCTOR
          </a>
          <a href="/" className="btn-primary inline-flex items-center justify-center">
            STUDENT
          </a>
        </div>
      </div>
      <div className="hidden lg:mt-0 xl:block">
        <img src="/images/landing_page-1.png" alt="mockup" className="w-[460px] h-[242px] mx-auto" />
      </div>
    </div>

    {/* Toogle */}
    <div className="flex justify-center mt-7">
      <a className="btn-icon-primary items-center justify-center inline-flex" href="#middle">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </div>

  </section>

  <div id="middle" className="h-[70px]"></div>

  <section className="bg-white xl:px-0 xs:px-12">
    <div className="grid mx-auto md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
      <div className="hidden lg:mt-0 xl:block">
        <img src="/images/landing_page-2.png" alt="mockup" />
      </div>
      <div className="mx-auto place-self-center rounded-2xl shadow-xl px-6 py-6">
        <p className="pretitle mb-2">FOR STUDENT</p>
        <p className="h2">
          Learn and Test Your Knowledge in Anything for{" "}
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            Free
          </span>
        </p>
        <p className="subtitle text-neutral-500 mt-5 mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et
        </p>
        <div className="flex items-end justify-end">
          <a href="/" className="btn-primary">
            LEARN NOW
          </a>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-7 ">
      <a className="btn-icon-primary items-center justify-center inline-flex" href="#bottom">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </div>
  </section>

  <div id="bottom" className="h-[70px]"></div>

  <section className="bg-white xl:px-0 xs:px-12">
    <div className="grid mx-auto grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
      <div className="place-self-center rounded-2xl shadow-xl px-6 py-6">
        <p className="pretitle mb-2">FOR INSTRUCTOR</p>
        <p className="h2">
          Reach More Student Anywhere, Anytime for{" "}
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
            Free
          </span>
        </p>
        <p className="subtitle text-neutral-500 mt-5 mb-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
        <div className="flex items-end justify-end">
          <a href="/" className="btn-primary">
            TEACH NOW
          </a>
        </div>
      </div>

      <div className="hidden lg:mt-0 xl:block">
        <img src="/images/landing_page-3.png" alt="mockup" className="w-[440px] h-[440px] mx-auto" />
      </div>
    </div>

    <div className="flex justify-center mt-7 ">
      <a className="btn-icon-primary items-center justify-center inline-flex" href="#top">
        <i className="fa-solid fa-chevron-up"></i>
      </a>
    </div>
    
  </section>

  <div className="h-[70px]"></div>
</div>
);
}

export default LandingPage;