import { useStore } from "@/store/Provider";
import React from "react";
import HydrateFallback from "./HydrateFallback";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const { user, isLoading } = useStore();

  if (isLoading) {
    return <HydrateFallback />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
