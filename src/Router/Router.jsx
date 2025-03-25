import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo";
import Education from "../Pages/Education/Education";
import Results from "../Pages/Results/Results";
import Certificate from "../Pages/Certificate/Certificate";
import Docs from "../Pages/Docs/Docs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "personal-info", element: <PersonalInfo /> },
      { path: "education-wrapper", element: <Education /> },
      { path: "results", element: <Results /> },
      { path: "certificate-programs", element: <Certificate /> },
      { path: "docs-programs", element: <Docs /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

export default router;
