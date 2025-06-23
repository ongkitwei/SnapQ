import React from "react";

function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Project Name</a>
        </li>
        <li>Current Queue</li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
