import QueueTable from "@/ui/QueueTable";
import React from "react";
import DropDown from "@/ui/DropDown";
import Image from "next/image";
import { BsQrCodeScan } from "react-icons/bs";

function OwnerData({ projectName, qrUrl }) {
  return (
    <>
      <div className="w-[50%] flex flex-row items-center justify-between pt-8 pb-4">
        <h1 className="font-michroma text-xl">{projectName}</h1>
        <DropDown
          dropdownText={
            <>
              SCAN <BsQrCodeScan size={18} />
            </>
          }
          dropdownHeader={
            <>
              <span className="flex flex-row items-center gap-x-2">
                <BsQrCodeScan size={17} />
                Scan & Wait
              </span>
            </>
          }
          dropdownButton="Download QR"
          dropdownContent={
            qrUrl && (
              <Image
                src={qrUrl}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                alt="QR Code"
              />
            )
          }
          dropdownDescription="Scan the QR code to reserve a queue number for yourself:"
        />
      </div>
      <QueueTable />
    </>
  );
}

export default OwnerData;
