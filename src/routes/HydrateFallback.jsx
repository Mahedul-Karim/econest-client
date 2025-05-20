import Loader from "@/components/common/loader/Loader";
import React from "react";

const HydrateFallback = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Loader />
    </div>
  );
};

export default HydrateFallback;
