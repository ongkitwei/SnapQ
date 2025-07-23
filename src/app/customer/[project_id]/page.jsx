"use client";
import React, { use, useEffect } from "react";
import { useAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { customerQueueAtom } from "../../../../jotai/CustomersAtoms";
import { projectNameAtom } from "../../../../jotai/ProjectsAtoms";
import axios from "axios";

function page({ params }) {
  const { project_id } = use(params);
  const searchParams = useSearchParams();
  const qNumber = searchParams.get("queueno");
  const projectName = searchParams.get("projectname");
  const [customerqueue, setCustomerqueue] = useAtom(customerQueueAtom);
  const [projects, setProjects] = useAtom(projectNameAtom);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await axios.get("/api/project");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
      }
    }
    getProjects();
  }, []);
  console.log(projects);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-y-8">
      <span className="text-center font-michroma text-3xl">
        {projectName} 💯
      </span>
      <div className="flex flex-col items-center">
        <p className="text-primary">
          Current queue number is{" "}
          <span className="font-extrabold text-2xl">
            {projects.find((x) => x.project == projectName)?.CurrentQueueNumber}
          </span>
          .
        </p>
        <p className="text-accent">
          Your queue number is{" "}
          <span className="font-extrabold text-2xl">{qNumber}</span>.
        </p>
      </div>
    </div>
  );
}

export default page;
