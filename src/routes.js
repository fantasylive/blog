import { createBrowserRouter } from "react-router-dom";
import ProjectDisplay from "./components/ProjectDisplay";
import { AntdForm } from "./pages/antd-demos";
import projects from "@/projects.js";
import antdDemosProjects from "@/pages/antd-demos/projects.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectDisplay projects={projects} />,
  },
  {
    path: "/antd-demos",
    element: <ProjectDisplay projects={antdDemosProjects} />,
    children: [
      {
        path: "antdForm",
        element: <AntdForm />,
      },
    ],
  },
]);

export default router;
