import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/Provider";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase.config";
import { toast } from "sonner";

const Image = () => {
  const { user } = useStore();

  const fallBack = user?.displayName?.split(" ");

  const logout = () => {
    signOut(auth).then(() => toast.success("Logged out successfully!"));
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <Popover>
          <PopoverTrigger asChild>
            <TooltipTrigger>
              <Avatar className={"size-10 cursor-pointer"}>
                <AvatarImage src={user?.photoURL} />
                <AvatarFallback>
                  {fallBack?.[0]?.[0] + fallBack?.[1]?.[0]}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
          </PopoverTrigger>
          <PopoverContent className="bg-background dark:bg-foreground border-border text-dark">
            <Button className="w-full bg-danger dark:bg-danger hover:bg-danger dark:hover:bg-danger text-white" onClick={logout}>
              Logout
            </Button>
          </PopoverContent>
        </Popover>

        <TooltipContent>
          <p>{user?.displayName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Image;
