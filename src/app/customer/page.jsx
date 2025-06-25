// page.jsx
"use client";

import React, { Suspense } from "react";
import CustomerPage from "./CustomerPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomerPage />
    </Suspense>
  );
}
