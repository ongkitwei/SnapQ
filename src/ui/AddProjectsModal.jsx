import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import axios from "axios";
import { projectNameAtom } from "../../jotai/ProjectsAtoms";
import { signIn, signOut, useSession } from "next-auth/react";

function AddProjectsModal({ title }) {
  const [projects, setProjects] = useAtom(projectNameAtom);
  const [projectName, setProjectName] = useState(""); // current input
  const { data: session, status } = useSession();

  const handleAddButton = async () => {
    try {
      const response = await axios.post("/api/project", {
        projectName: projectName,
        email: session.user.email,
      });
      setProjects((prev) => [...prev, response.data]);
      setProjectName("");
      console.log(response);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-center p-6">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-2">
            ✕
          </button>{" "}
          <h3 className="font-bold text-xl md:text-2xl text-center pb-4 md:pb-8 pt-2">
            {title}
          </h3>
          <div className="flex flex-row items-center justify-center">
            <input
              type="text"
              placeholder="Project Name"
              className="w-[70%] input mr-2"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <button
              className="btn bg-blue-500 text-white"
              onClick={handleAddButton}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default AddProjectsModal;
