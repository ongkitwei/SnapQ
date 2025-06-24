import React from "react";

function DropDown({
  dropdownText,
  dropdownContent,
  dropdownDescription,
  dropdownHeader,
  dropdownButton,
}) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-black rounded-lg text-white"
      >
        {dropdownText}
      </div>
      <ul
        tabIndex={0}
        className="flex flex-col justify-center gap-y-2 p-0 dropdown-content menu rounded-box bg-base-100 z-50 w-64 shadow-sm"
      >
        <li>
          <h2 className="text-xl font-semibold border-b-1 border-slate-200 rounded-none">
            {dropdownHeader}
          </h2>
        </li>
        <li>
          <p className="text-sm text-gray-600">{dropdownDescription}</p>
        </li>
        <li>{dropdownContent}</li>
        <li>
          <button className="btn btn-neutral mt-20 mb-2 w-[90%] m-auto">
            {dropdownButton}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
