import React from "react";
import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsSubHeader from "./components/ProjectsSubHeader";
import AllProjectsSection from "./components/AllProjectsSection";

const AllProjects = () => {
  return (
    <div className="bg-slate-50 w-full min-h-screen flex">
      <AllProjectsArea />
      {/* Project Sidebar we're going to add */}
    </div>
  );

  function AllProjectsArea() {
    return (
      <div className="w-[78%] p-10 flex flex-col gap-3 border">
        {/* Search Bar and add project button */}
        <ProjectsHeader />
        {/* My Projects Title and The Add Button */}
        <ProjectsSubHeader />
        {/* All Dynamics Projects Cards */}
        <AllProjectsSection />
      </div>
    );
  }
};

export default AllProjects;
