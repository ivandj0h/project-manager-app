import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const ProjectsHeader = () => {
  return (
    <div className="flex justify-between">
      {/* Search Bar Component */}
      <SearchBar />
      {/* Add Button */}
      <AddProjectButton />
    </div>
  );

  // Search Bar
  function SearchBar() {
    return (
      <div className="flex items-center">
        {/* Search Icon */}
        <div>
          <SearchIcon
            className="text-slate-800"
            outline-none
            sx={{ fontSize: "26px" }}
          />
        </div>

        {/* Search Input */}
        <div>
          <input
            placeholder="Search a Project..."
            className="p-2 bg-transparent text-[14px] outline-none"
          />
        </div>
      </div>
    );
  }

  // Add Button
  function AddProjectButton() {
    return (
      <button className="bg-sky-600 text-white px-2 pr-3 text-[14px] rounded-md flex gap-1 items-center">
        <AddIcon sx={{ fontSize: "22px" }} className="mt-[2px]" />
        <span>New Project</span>
      </button>
    );
  }
};

export default ProjectsHeader;
