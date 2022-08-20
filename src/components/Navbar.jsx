import React, { useState } from "react";
import useAuth from "../context/AuthContext";

function Navbar() {
  const { getRole, signOut } = useAuth();
  const role = getRole();
  const [openDropdown, setOpenDropdown] = useState();

  const NavbarDropdown = () => {
    return (
      <button
        onClick={() => signOut()}
        className="selection-container w-full px-8 border-t-0 hover:bg-error-50"
      >
        <p className="body text-error-500 selection-body">Sign Out</p>
      </button>
    );
  };

  return (
    <nav className="bg-white px-[35px] py-[15px] sm:px-[70px] sticky top-0 z-10">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center">
          <img
            className="w-[30px] h-[30px] rounded-[100px] bg-gradient-to-r from-primary-500 to-secondary-500 mr-7"
            alt=""
          />
          <span className="self-center h3 text-[20px] hidden sm:block">
            Perwibuan Course
          </span>
        </a>
        {!role ? (
          <a
            href="/login"
            className="btn-text text-neutral-500 font-normal px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
          >
            Sign In
          </a>
        ) : (
          <div className="flex flex-row space-x-10 items-center relative">
            <a
              href={`/${role}/dashboard`}
              className="body text-neutral-900 font-bold"
            >
              Dashboard
            </a>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="text-[24px] text-neutral-500 space-x-8"
            >
              <i class="fa-solid fa-circle-user"></i>
            </button>
            {openDropdown && (
              <div className="absolute top-12  w-[200px] z-10">
                <NavbarDropdown />
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
