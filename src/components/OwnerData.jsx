import QueueTable from "@/ui/QueueTable";
import React, { useEffect, useState } from "react";
import DropDown from "@/ui/DropDown";
import Image from "next/image";
import { BsQrCodeScan } from "react-icons/bs";
import axios from "axios";
import { useAtom } from "jotai";
import { customerNameAtom } from "../../jotai/CustomersAtoms";

function OwnerData({ projectName, qrUrl, projectId }) {
  const [customerData, setCustomerData] = useAtom(customerNameAtom);

  useEffect(() => {
    async function getCustomers() {
      const id = projectId;
      const response = await axios.get("/api/project/queue", {
        params: { id: id },
      });

      console.log(response.data);
      setCustomerData(response.data);
    }
    getCustomers();
    // Polling every 5 seconds
    const interval = setInterval(getCustomers, 8000); // 5000ms = 5s

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-[70%] md:w-[50%] flex flex-row items-center justify-between pt-8 pb-4">
        <h1 className="font-michroma text-xl">{projectName}</h1>
        <DropDown
          dropdownText={
            <>
              SCAN <BsQrCodeScan size={18} />
            </>
          }
          dropdownHeader={
            <>
              <span className="flex flex-row items-center justify-center gap-x-2 font-bold text-2xl py-2">
                <BsQrCodeScan size={18} />
                Scan & Wait
              </span>
            </>
          }
          dropdownButton="Download QR"
          dropdownContent={
            qrUrl && (
              <Image
                src={qrUrl}
                width={50}
                height={50}
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
