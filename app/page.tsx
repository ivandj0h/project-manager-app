import Sidebar from "./components/Sidebar";
import AllProjects from "./pages/AllProjects";

export default function Home() {
  return (
    <div className="flex w-full h-screen poppins">
      {/* Sidebar */}
      <Sidebar />
      {/* All project Pages */}
      <AllProjects />
    </div>
  );
}
