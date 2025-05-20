import { Button } from "@/components/ui/button";
import { useStore } from "@/store/Provider";
import { Sun, Moon } from "lucide-react";
import React from "react";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <Button
      variant="ghost"
      className={"hover:bg-muted/10"}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </Button>
  );
};

export default DarkMode;
