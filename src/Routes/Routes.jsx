import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Certificates from "../Pages/Certificates";
import AllProjects from "../Pages/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/certificates",
        element: <Certificates></Certificates>,
      },
      {
        path: "/all-projects",
        element: <AllProjects></AllProjects>,
      },
    ],
  },
]);

export default router;
