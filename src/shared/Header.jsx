import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <nav className="flex flex-row items-center justify-between px-8 py-1 border-b border-slate-200">
        <div className="flex flex-row items-center">
          <Image
            src="/snapq-icon.png"
            width={70}
            height={70}
            className="object-cover"
            alt="scanqr-icon"
          ></Image>
          <span className="font-bold text-blue-500 text-3xl">Snap</span>
          <span className="font-bold rotate-6 text-3xl">Q</span>
        </div>

        <div className="flex-row items-center gap-x-12 hidden md:flex">
          <a className="nav-hover" href="#about-component">
            About
          </a>
          <span className="nav-hover">Tutorial</span>
          <a className="nav-hover" href="#pricing-component">
            Pricing
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          {" "}
          <span className="btn btn-active border border-blue-500 text-blue-500 bg-white">
            Get Started
          </span>
          <span className="btn btn-active bg-blue-500 text-white">Log In</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
