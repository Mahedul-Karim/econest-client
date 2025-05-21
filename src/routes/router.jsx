import Root from "@/layout/Root";
import NotFound from "@/pages/error/NotFound";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";
import HydrateFallback from "./HydrateFallback";
import Logins from "@/pages/auth/Logins";
import SignUp from "@/pages/auth/SignUp";
import { BASE_URL } from "@/lib/constants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`${BASE_URL}/gardeners/featured`),
        hydrateFallbackElement: <HydrateFallback />,
      },
      {
        path: "/login",
        element: <Logins />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
