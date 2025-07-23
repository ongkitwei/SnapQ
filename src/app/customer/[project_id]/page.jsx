"use client";
import React, { use } from "react";
import { useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { customerQueueAtom } from "../../../../jotai/CustomersAtoms";

function page({ params }) {
  const { project_id } = use(params);
  const searchParams = useSearchParams();
  const qNumber = searchParams.get("queueno");
  const [customerqueue, setCustomerqueue] = useAtom(customerQueueAtom);
  return <div>your queue number is {qNumber}</div>;
}

export default page;
