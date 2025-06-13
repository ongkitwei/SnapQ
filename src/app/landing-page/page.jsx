import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center pt-24">
      <div className="flex flex-row gap-x-12 px-14 w-[90%] justify-center">
        <div className="flex flex-col items-start justify-center gap-y-4 h-[350px]">
          <h1 className="landing-header text-5xl w-[200px]">
            No More Standing in Line
          </h1>
          <p className="w-[300px] text-slate-800">
            Scan a QR code, join the queue, and relax. We'll notify you when
            it's your turn.
          </p>
          <div className="flex flex-row items-center justify-between gap-x-6 w-full">
            <button className="btn btn-active btn-info px-6">Try Demo</button>
            <button className="btn btn-active bg-transparent px-6">
              Join as Business
            </button>
          </div>
        </div>
        <Image
          src="/qrcode-icon.jpg"
          width={350}
          height={350}
          className="object-cover rounded-md"
          alt="qrcode-icon"
        />
      </div>
      <div className="flex flex-col w-[90%] px-14 pt-16 items-center">
        <h2 className="landing-header text-3xl pb-8">How It Works</h2>

        <div className="flex flex-row items-center gap-x-8">
          <div>
            <Image
              src="/scanqr-icon.png"
              width={50}
              height={50}
              className="landing-icon"
              alt="scanqr-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">1. Scan QR Code</p>
          </div>
          <span className="pb-8">&gt;</span>
          <div>
            <Image
              src="/joinq-icon.png"
              width={50}
              height={50}
              className="landing-icon"
              alt="joinq-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">
              2. Join the Queue
            </p>
          </div>
          <span className="pb-8">&gt;</span>

          <div>
            <Image
              src="/phonenotification-icon.png"
              width={50}
              height={50}
              className="landing-icon"
              alt="phonenotification-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">3. Get notified</p>
          </div>
          <span className="flex flex-row items-center gap-x-8"></span>
        </div>
      </div>
      <div className="flex flex-col w-[90%] px-14 pt-16 items-center">
        <h2 className="landing-header text-3xl pb-8">For Businesses</h2>
        <div className="flex flex-row items-center justify-center gap-x-12">
          <div className="flex flex-col items-center justify-start">
            <ul className="list-disc pl-5 text-blue-900 font-semibold leading-7">
              <li>No need for physical kiosk</li>
              <li>Manage queues from any device</li>
              <li>Minimize crowds and waiting areas</li>
              <li>Streamline customer flow and experience</li>
            </ul>
          </div>
          <Image
            src="/monitor-icon.png"
            width={110}
            height={110}
            className="object-cover rounded-xl"
            alt="monitor-icon"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col w-[90%] px-14 pt-16 items-center">
        <h2 className="landing-header text-3xl pb-8">Use Cases</h2>
        <div className="flex flex-row items-center justify-center gap-x-10">
          <div className="flex flex-col items-center">
            <Image
              src="/restaurant-icon.png"
              width={50}
              height={50}
              className="landing-icon rounded-full"
              alt="scanqr-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">Restaurant</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/clinic-icon.png"
              width={50}
              height={50}
              className="landing-icon rounded-full"
              alt="scanqr-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">Clinic</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/barbershop-icon.png"
              width={50}
              height={50}
              className="landing-icon rounded-full"
              alt="scanqr-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">Barbershop</p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <Image
              src="/government-icon.png"
              width={50}
              height={50}
              className="landing-icon rounded-full"
              alt="scanqr-icon"
            ></Image>
            <p className="pt-3 text-blue-900 font-semibold">Government</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
