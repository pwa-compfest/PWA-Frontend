import React from "react";

function Navbar() {
  return (
    <nav className="bg-white px-[35px] py-[15px] sm:px-[70px] sticky top-0 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center">
          <img className="w-[30px] h-[30px] rounded-[100px] bg-gradient-to-r from-primary-500 to-secondary-500 mr-7" />
          <span className="self-center h3 text-[20px] hidden sm:block">
            Perwibuan Course
          </span>
        </a>

        <a
          href="/"
          className="btn-text text-neutral-500 font-normal px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
