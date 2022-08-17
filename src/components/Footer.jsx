import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-6 p-8 w-full bg-bright px-12 md:px-[100px] xl:px-[180px]">
      <div>
        <a href="/about" className="h3 text-[20px]">
          About
        </a>
        <a href="/team" className="small-text mt-10 block">
          Our Team
        </a>
        <a href="/credit" className="small-text mt-4">
          Credit
        </a>
      </div>
      <div>
        <a href="/contact" className="h3 text-[20px]">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Footer;
