import { Button } from "@/components/ui/button";
import React from "react";
import SheetCloseWrapper from "../SheetCloseWrapper";
import { useNavigate } from "react-router";

const Auth = ({ closeOnClick = false }) => {
  const navigate = useNavigate();

  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Button className={"font-medium grow"} onClick={() => navigate("/login")}>
        Login/Signup
      </Button>
    </SheetCloseWrapper>
  );
};

export default Auth;
