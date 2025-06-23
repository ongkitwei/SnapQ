// app/page.js or app/yourcomponent.jsx
"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function Page({ params }) {
  const id = params.id;
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    const generateQR = async () => {
      try {
        const data = await QRCode.toDataURL(`http://localhost:3000/home/${id}`);
        setQrUrl(data);
      } catch (err) {
        console.error(err);
      }
    };

    generateQR();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">QR Code Generator</h1>
      {qrUrl && <img src={qrUrl} alt="QR Code" />}
    </div>
  );
}
