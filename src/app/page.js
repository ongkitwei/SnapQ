"use client";
import React from "react";
import Image from "next/image";
import Price from "@/ui/Price";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if (session) {
    redirect("/home");
  }
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden items-center justify-center pt-24">
      <div className="flex flex-col md:flex-row gap-x-12 px-14 w-[95%] md:w-[90%] items-center justify-center">
        <div className="flex flex-col items-center md:items-start md:justify-center gap-y-4 h-[350px]">
          <h1 className="landing-header text-6xl md:text-5xl xl:text-7xl xl:w-[500px] w-[250px] md:w-[200px]">
            No More Standing in Line
          </h1>
          <p className="w-[90%] md:w-[300px] xl:w-[500px] xl:text-xl text-center md:text-start pt-4 md:pt-0 text-slate-800">
            Scan a QR code, join the queue, and relax. We will notify you when
            it is your turn.
          </p>
          <div className="flex flex-row items-center justify-center md:justify-center xl:gap-x-36 gap-x-6 w-full pt-4 md:pt-0">
            <button className="btn btn-active btn-info px-6">
              Get a Glimpse
            </button>
            <a
              className="btn btn-active bg-transparent px-6"
              href="#pricing-component"
            >
              Join as Business
            </a>
          </div>
        </div>
        <Image
          src="/qrcode-icon.jpg"
          width={350}
          height={350}
          className="object-cover rounded-md pt-12 md:pt-0"
          alt="qrcode-icon"
        />
      </div>
      <div
        className="flex flex-col w-[90%] px-14 pt-30 items-center"
        id="about-component"
      >
        <h2 className="landing-header text-4xl xl:text-5xl md:text-3xl pb-8">
          How It Works
        </h2>

        <div className="flex flex-col gap-y-8 md:flex-row items-start md:items-center md:gap-x-8">
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
          <span className="pb-8 hidden md:block">&gt;</span>
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
          <span className="pb-8 hidden md:block">&gt;</span>

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
      <div className="flex flex-col w-[90%] px-14 pt-30 items-center">
        <h2 className="landing-header text-3xl xl:text-5xl pb-8">
          For Businesses
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 md:gap-x-12">
          <div className="flex flex-col items-center justify-start">
            <ul className="list-disc pl-5 text-blue-900 font-semibold leading-7 xl:text-xl">
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
      <div className="flex flex-col w-[90%] px-14 pt-30 items-center">
        <h2 className="landing-header text-3xl xl:text-5xl pb-8">Use Cases</h2>
        <div className="grid grid-cols-2 gap-8 md:flex md:flex-row md:items-center md:justify-center md:gap-x-10">
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
      <div
        className="flex flex-col w-[90%] px-14 pt-30 items-center"
        id="pricing-component"
      >
        <h2 className="landing-header text-3xl xl:text-5xl pb-8">Pricing</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-4 gap-y-6">
          <Price
            price="$7.99/month"
            header="Quick Taste"
            popularity="HOT 🔥"
            pointer1="Up to 100 customers a day"
            pointer2="Join queue via QR code"
            pointer3="Real-time queue number updates"
            pointercancel1="No automated msg sent to customers"
          />
          <Price
            price="$79.99/year"
            header="Loyalty"
            popularity="MOST POPULAR 💯"
            pointer1="Up to 200 customers a day"
            pointer3="Real-time queue number updates"
            pointer2="Get data for customers for last 30 days"
            pointer4="SMS sent to customer upon reaching their number"
          />
        </div>
      </div>
    </div>
  );
}
