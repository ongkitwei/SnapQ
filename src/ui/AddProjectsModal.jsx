import React, { useState } from "react";
import { useAtom } from "jotai";
import { projectNameAtom } from "../../jotai/ProjectsAtoms";

function AddProjectsModal({ title }) {
  const [projects, setProjects] = useAtom(projectNameAtom);
  const [projectName, setProjectName] = useState(""); // current input

  const handleAddButton = () => {
    setProjects((prev) => [...prev, projectName]);
    setProjectName("");
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-center">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>{" "}
          <h3 className="font-bold text-2xl text-center pb-8">{title}</h3>
          <input
            type="text"
            placeholder="Project Name"
            className="input mr-2"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button
            className="btn bg-blue-500 text-white"
            onClick={handleAddButton}
          >
            Add
          </button>
        </form>
      </div>
    </dialog>
  );
}

export default AddProjectsModal;
