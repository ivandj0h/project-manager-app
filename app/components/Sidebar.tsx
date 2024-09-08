import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitScreenIcon from "@mui/icons-material/SplitScreen";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r">
      <Logo />
      <Menu />
      <Profile />
    </div>
  );

  // The Profile Image
  function Profile() {
    return <div className="w-7 h-7 bg-sky-600 rounded-md"></div>;
  }

  // The Menu
  function Menu() {
    return (
      <div className="flex flex-col gap-6 items-center">
        <BorderAllIcon
          sx={{ fontSize: "25px" }}
          className="text-sky-600 cursor-pointer"
        />
        <SplitScreenIcon
          sx={{ fontSize: "25px" }}
          className="text-slate-300 cursor-pointer"
        />
        <LogoutIcon
          sx={{ fontSize: "25px" }}
          className="text-slate-300 cursor-pointer"
        />
      </div>
    );
  }

  // The Logo
  function Logo() {
    return (
      <div className="rounded-md w-10 h-10 flex items-center justify-center">
        <TaskAltIcon
          className="text-sky-600 font-bold"
          sx={{ fontSize: "41px" }}
        />
      </div>
    );
  }
};

export default Sidebar;
