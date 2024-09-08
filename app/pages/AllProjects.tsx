import React from "react";
import ProjectsHeader from "./components/ProjectsHeader";

const AllProjects = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      {/* Project Sidebar we're going to add */}
    </div>
  );

  function AllProjectsArea() {
    return (
      <div>
        {/* Search Bar and add project button */}
        <ProjectsHeader />
        {/* My Projects Title and The Add Button */}
        <ProjectsHeader />
      </div>
    );
  }
};

export default AllProjects;
