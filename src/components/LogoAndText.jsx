import React from "react";
import Image from "next/image";

function LogoAndText() {
  return (
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
  );
}

export default LogoAndText;
