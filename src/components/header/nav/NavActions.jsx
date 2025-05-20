import Auth from "@/components/common/buttons/Auth";
import DarkMode from "@/components/common/buttons/DarkMode";
import React from "react";

const NavActions = ({ closeOnClick = false }) => {
  return (
    <div className="flex items-center gap-2">
      <DarkMode />
      <Auth closeOnClick={closeOnClick} />
    </div>
  );
};

export default NavActions;
