import Root from "@/layout/Root";
import NotFound from "@/pages/error/NotFound";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";
import HydrateFallback from "./HydrateFallback";
import Logins from "@/pages/auth/Logins";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/dummyData.json"),
        hydrateFallbackElement: <HydrateFallback />,
      },
      {
        path: "/login",
        element: <Logins />,
      },
    ],
  },
]);
