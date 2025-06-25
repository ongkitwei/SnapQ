"use client";
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import LogoAndText from "@/components/LogoAndText";

function Header() {
  const { data: session, status } = useSession();
  return (
    <div>
      <nav className="flex flex-row items-center justify-between px-8 py-1 border-b border-slate-200">
        <LogoAndText />
        {!session ? (
          <div className="flex-row items-center gap-x-12 hidden md:flex">
            <a className="nav-hover" href="#about-component">
              About
            </a>
            <span className="nav-hover">Tutorial</span>
            <a className="nav-hover" href="#pricing-component">
              Pricing
            </a>
          </div>
        ) : null}
        {session ? (
          <span
            className="btn btn-active bg-blue-500 text-white"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Log Out
          </span>
        ) : (
          <span
            className="btn btn-active bg-blue-500 text-white"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/home",
                prompt: "select_account",
              })
            }
          >
            Log In
          </span>
        )}
      </nav>
    </div>
  );
}

export default Header;
