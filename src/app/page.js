import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-28 flex flex-row items-start justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1>No More Standing in Line</h1>
        <p>
          Scan a QR code, join the queue, and relax. We'll notify you when it's
          your turn.
        </p>
      </div>
      <Image
        src="/qrcode-icon.jpg"
        width={300}
        height={300}
        className="object-cover"
        alt="qrcode-icon"
      />
    </div>
  );
}
