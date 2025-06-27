"use client";
import AddProjectsModal from "@/ui/AddProjectsModal";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { projectNameAtom } from "../../../jotai/ProjectsAtoms";
import { useAtom } from "jotai";
import Breadcrumbs from "@/ui/Breadcrumbs";
import SearchInput from "@/ui/SearchInput";
import { searchFilterAtom } from "../../../jotai/SearchFilterAtoms";
import Link from "next/link";

function page() {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useAtom(projectNameAtom);
  const [inputField, setInputField] = useAtom(searchFilterAtom);
  const [loading, setLoading] = useState(false);
  const filteredProjects = projects.filter((project) =>
    project.project.toLowerCase().includes(inputField.toLowerCase())
  );
  let id;

  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);
        const response = await axios.get("/api/project");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  return (
    <div className="p-6 flex flex-col items-center justify-start min-h-screen">
      <div className="w-[77%] lg:w-[65%] 2xl:w-[40%] flex flex-col items-start justify-center gap-y-4">
        <Breadcrumbs />
        {session ? (
          <p className="text-3xl font-semibold">Hello {session.user.name}</p>
        ) : (
          <span className="loading loading-dots loading-md"></span>
        )}
        <SearchInput inputField={inputField} setInputField={setInputField} />
      </div>

      <div className="w-[77%] lg:w-[65%] 2xl:w-[40%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-start pt-10">
        <div
          className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-xl border border-slate-300 text-slate-400 text-4xl flex items-center justify-center hover:cursor-pointer"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          +
        </div>
        {filteredProjects.map((x, index) => (
          <Link
            href={`/home/${x.project}?id=${x._id}`}
            key={index}
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-xl border border-slate-300 text-slate-700 flex items-center justify-center text-sm md:text-xl hover:cursor-pointer font-michroma px-2"
          >
            <span className="w-full break-words text-center">{x.project}</span>
          </Link>
        ))}

        <AddProjectsModal title="Create New Queue Project" />
      </div>
    </div>
  );
}

export default page;
