import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProjectsSubHeader = () => {
  return (
    <div className="mt-20 flex justify-between font-bold items-center">
      <MyProjectsText />
      <SortByButton />
    </div>
  );

  function MyProjectsText() {
    return <p className="text-[26px] font-bold">My Projects</p>;
  }

  function SortByButton() {
    return (
      <div className="flex text-[15px] font-semibold gap-3">
        <span className="text-slate-300">Sort By</span>
        <div className="flex gap-1 items-center cursor-pointer">
          <span className="text-slate-800">Recent Project</span>
          <KeyboardArrowDownIcon sx={{ fontSize: "19px" }} />
        </div>
      </div>
    );
  }
};

export default ProjectsSubHeader;
