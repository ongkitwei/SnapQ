"use client";
import AddProjectsModal from "@/ui/AddProjectsModal";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { projectNameAtom } from "../../../jotai/ProjectsAtoms";
import { useAtom } from "jotai";

function page() {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useAtom(projectNameAtom);

  useEffect(() => {
    if (session) {
      handleSubmit();
    }
  }, [session]);

  async function handleSubmit() {
    try {
      const response = await axios.post("/api/test", {
        name: session.user.name,
        email: session.user.email,
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  }

  return (
    <div className="p-6 flex flex-col items-center justify-start min-h-screen">
      {session ? (
        <p className="text-3xl font-semibold">Hello {session.user.name}</p>
      ) : (
        <span className="loading loading-ring loading-xl"></span>
      )}
      <div className="grid grid-cols-3 gap-4 place-items-start pt-10">
        <div
          className="w-[200px] h-[250px] rounded-xl border border-slate-300 text-slate-400 flex items-center justify-center text-4xl hover:cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          +
        </div>

        {projects.map((x, index) => (
          <div
            key={index}
            className="w-[200px] h-[250px] rounded-xl border border-slate-300 text-slate-400 flex items-center justify-center text-4xl hover:cursor-pointer"
          >
            {x}
          </div>
        ))}

        <AddProjectsModal title="Create New Queue Project" />
      </div>
    </div>
  );
}

export default page;
