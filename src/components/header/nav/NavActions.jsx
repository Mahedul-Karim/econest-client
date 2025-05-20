import Auth from "@/components/common/buttons/Auth";
import DarkMode from "@/components/common/buttons/DarkMode";
import Image from "@/components/common/user/Image";
import { useStore } from "@/store/Provider";
import React from "react";

const NavActions = ({ closeOnClick = false }) => {
  const { user } = useStore();

  return (
    <div className="flex items-center gap-2">
      <DarkMode />
      {user ? <Image /> : <Auth closeOnClick={closeOnClick} />}
    </div>
  );
};

export default NavActions;
