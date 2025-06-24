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
      <div
        tabIndex={0}
        className="flex flex-col justify-center gap-y-2 p-0 dropdown-content menu rounded-box bg-base-100 z-50 w-72 shadow-sm"
      >
        <h2 className="text-2xl font-semibold border-b-1 border-slate-200 rounded-none">
          {dropdownHeader}
        </h2>
        <p className="text-sm text-gray-600 text-center">
          {dropdownDescription}
        </p>

        <p className="px-12">{dropdownContent}</p>
        <button className="btn btn-neutral mt-12 m-6 w-[90%]">
          {dropdownButton}
        </button>
      </div>
    </div>
  );
}

export default DropDown;
