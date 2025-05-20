import { Button } from "@/components/ui/button";
import React from "react";
import SheetCloseWrapper from "../SheetCloseWrapper";

const Auth = ({ closeOnClick = false }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Button className={"font-medium grow"}>Login/Signup</Button>
    </SheetCloseWrapper>
  );
};

export default Auth;
