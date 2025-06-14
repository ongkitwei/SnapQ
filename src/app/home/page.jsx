"use client";
import AddProjectsModal from "@/ui/AddProjectsModal";
import React from "react";

function page() {
  return (
    <div className="grid grid-cols-3 place-items-start p-12 min-h-screen">
      <div
        className="w-[200px] h-[250px] rounded-xl border border-slate-300 text-slate-400 flex items-center justify-center text-4xl hover:cursor-pointer"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        +
      </div>
      <AddProjectsModal />
    </div>
  );
}

export default page;
