import { RouterProvider } from "react-router-dom";
import Copyright from "./components/Copyright";
import router from "./routes";

function App() {
  return (
    <div id="app">
      <div className="header"></div>
      <div className="content">
        <RouterProvider router={router} />
      </div>
      <div className="footer">
        <Copyright />
      </div>
    </div>
  );
}

export default App;
