import React from "react";
import { Link } from "react-router";
import SheetCloseWrapper from "./SheetCloseWrapper";

const Logo = ({ closeOnClick = false }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Link to="/" className="flex items-center gap-2">
        <img src="/icon.png" alt="" className="size-10 sm:size-12" />
        <p className="text-lg font-semibold text-dark/80">
          Eco<span className="text-primary">Nest</span>
        </p>
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
