import  React from "react";
import  ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Header from '../src/Components/Header/Header'
import Birthday from "./Pages/Birthday/Birthday";
import Graduations from "./Pages/Graduations/Graduations";
import Anniversary from "./Pages/Anniversary/Anniversary";
import Wedding from "./Pages/Wedding/Wedding";
import Engagement from "./Pages/Engagement/Engagement";
import Funeral from "./Pages/Funeral/Funeral";
import Upcoming from "./Components/Upcoming/Upcoming";
import Singleflower from "./Pages/Singleflower/Singleflower";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <App/>,
  },
  {
    path: "/Header",
    element: <Header/>,
  },
  {
    path: "/Birthday",
    element: <Birthday/>,
  },
  {
    path: "/Graduations",
    element: <Graduations/>,
  },
  {
    path: "/Anniversary",
    element: <Anniversary/>,
  },
  {
    path: "/Wedding",
    element: <Wedding/>,
  },
  {
    path: "/Engagement",
    element: <Engagement/>,
  },
  {
    path: "/Funeral",
    element: <Funeral/>,
  },
  {
    path: "/Upcoming",
    element: <Upcoming/>,
  },
  {
    path: "/Singleflower",
    element: <Singleflower/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);