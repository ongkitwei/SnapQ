"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OwnerData from "@/components/OwnerData";
import QRCode from "qrcode";

export default function ClientPage({ projectName }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      try {
        const data = await QRCode.toDataURL(
          `https://snap-q-inky.vercel.app/home/${projectName}/${id}`
        );
        setQrUrl(data);
      } catch (err) {
        console.error(err);
      }
    };

    generateQR();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen">
      <OwnerData projectName={projectName} qrUrl={qrUrl} />
    </div>
  );
}
