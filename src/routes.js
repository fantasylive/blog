import { createBrowserRouter } from "react-router-dom";
import ProjectDisplay from "./components/ProjectDisplay";
import {AntdForm} from "./pages/demos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectDisplay />,
  },
  {
    path: "/demos",
    element: <ProjectDisplay />,
  },
  {
    path: "/demos/antdForm",
    element: <AntdForm />,
  },
]);

export default router;
